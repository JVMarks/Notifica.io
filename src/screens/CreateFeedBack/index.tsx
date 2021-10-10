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

type ThemeProps = {
  id: number,
  name: string
}

export function CreateFeedBack() {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState<ThemeProps[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const fetchTheme = async () => {
    try {

      const result = await api.get(`/floors`);

      if (!result) {
        return setLoading(true)
      } else {
        setTheme(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  async function hadleCreateFeedBack() {
    try {
      const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
      const userID = JSON.parse(user || '').id;

      const notificationDentails = {
        title: title,
        theme: theme,
        message: message,
        user: {
          id: userID
        },
      }

      api.post('/notifications', notificationDentails)

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Nosso time ira analisar seu feedback e caso seja aprovado iremos te notificar',
        buttonTitle: 'Agradecemos seu feedback',
        icon: 'smille',
        nextScreen: 'Feedback',
      });

    } catch {
      Alert.alert('Não foi possivel salvar seu feedback🔔');
    }
  }

  if (loading)
    return <Load />

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
              title="Tema"
            />
            <ListDivider />

            <View style={styles.input}>
              <Picker
                mode='dialog'
                selectedValue={selectedTheme}
                onValueChange={itemValue => setSelectedTheme(itemValue)}
              >
                {theme?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
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
              placeholder="Digite o Título..."
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
              value={message}
              onChangeText={message => setMessage(message)}
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