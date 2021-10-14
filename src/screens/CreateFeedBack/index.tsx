import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View, Alert } from 'react-native';

import { styles } from './styles';
import { api } from '../../services/api';
import { Picker } from '@react-native-picker/picker';

import { Load } from '../../components/Load';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CreateFeedBack() {

  const navigation = useNavigation();

  const [theme, setTheme] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  async function hadleCreateFeedBack() {
    try {

      const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
      const userID = JSON.parse(user || '').id;

      if (!theme && !title && !comment) {
        return Alert.alert('Preencha todos os campos para entendermos seu feedback🔙');
      } else {
        const FeedBackDentails = {
          theme: theme,
          title: title,
          comment: comment,
          user: {
            id: userID
          },
        }

        console.log("dados", FeedBackDentails)

        api.post('/feedbacks', FeedBackDentails)

        navigation.navigate('Confirmation', {
          title: 'Tudo certo',
          subtitle: 'Nosso time ira analisar seu feedback e caso seja aprovado iremos te notificar',
          buttonTitle: 'Agradecemos seu feedback',
          icon: 'smille',
          nextScreen: 'Feedback',
        });
      }
    } catch {
      Alert.alert('Não foi possivel salvar seu feedback🔔');
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        accessibilityLabel={'Tela criação de feedback'}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      >
        <SafeAreaView
          accessible={true}
          style={styles.formContainer}
          accessibilityLabel={'Formulario para criação de feedback'}
        >
          <ScrollView>
            <FormTitle
              accessibilityLabel={'Escolha um tema'}
              title="Temas"
            />
            <ListDivider />

            <View style={styles.input}>
              <Picker
                mode='dialog'
                selectedValue={theme}
                onValueChange={itemValue => setTheme(itemValue)}
              >
                <Picker.Item label="Elogios" value="Elogios" />
                <Picker.Item label="Melhorias" value="Melhorias" />
                <Picker.Item label="Dúvidas" value="Dúvidas" />
                <Picker.Item label="Outros" value="Outros" />
              </Picker>
            </View>
            <View style={{ margin: 15 }} />
            <FormTitle
              accessibilityLabel={'Título do feedback'}
              title="Título"
            />
            <ListDivider />
            <Textarea
              accessibilityLabel={'Escreva o titulo do feedback'}
              placeholder="Digite o título..."
              value={title}
              onChangeText={title => setTitle(title)}
            />
            <View style={{ margin: 15 }} />
            <FormTitle
              accessibilityLabel={'Deixe uma menssagem'}
              title="Comentario"
            />
            <ListDivider />
            <Textarea
              multiline={true}
              numberOfLines={4}
              maxLength={150}
              accessibilityLabel={'Para entendermos melhor seu feedback faça um comentario'}
              placeholder="Para entendermos melhor seu feedback deixe um comentario..."
              value={comment}
              onChangeText={comment => setComment(comment)}
              style={styles.txtcommet}
            />
            <View style={{ margin: 15 }} />
            <Button
              accessible={true}
              accessibilityLabel={'Pressione o botão para criar o feedback e navegar para a tela de lista de lista de feedbacks'}
              title="Novo Feedback"
              onPress={hadleCreateFeedBack}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}