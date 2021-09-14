import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { TextDropDown } from '../../components/TextDropDown';

export function CreateNotification() {

  const navigation = useNavigation();

  function hadleNotificationList() {
    navigation.navigate('NotificationList');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        enabled={Platform.OS === "ios" ? true : false}
        accessibilityLabel={'Tela criação de notificação'}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      >
        <SafeAreaView
          accessible={true}
          style={styles.formContainer}
          accessibilityLabel={'Formulario para criação de notificação'}
        >
          <ScrollView>
            <FormTitle
              accessibilityLabel={'Localização'}
              title="Localização"
            />
            <ListDivider />
            <TextDropDown
              accessibilityLabel={'Escolha uma andar'}
              placeholder="Escolha uma andar"
            />

            <TextDropDown
              accessibilityLabel={'Escolha uma local'}
              placeholder="Escolha uma local"
            />

            <FormTitle
              accessibilityLabel={'Prioridade'}
              title="Prioridade"
            />
            <ListDivider />
            <TextDropDown
              accessibilityLabel={'Escolha uma prioridade'}
              placeholder="Escolha uma prioridade"
            />

            <FormTitle
              accessibilityLabel={'Frequência'}
              title="Frequência"
            />
            <ListDivider />
            <TextDropDown
              accessibilityLabel={'Escolha uma frequência'}
              placeholder="Escolha uma frequência"
            />

            <FormTitle
              accessibilityLabel={'Categoria'}
              title="Categoria"
            />
            <ListDivider />
            <TextDropDown
              accessibilityLabel={'Escolha uma Categoria'}
              placeholder="Escolha uma Categoria"
            />

            <FormTitle
              accessibilityLabel={'Deixe uma menssagem'}
              title="Deixe uma menssagem"
            />
            <ListDivider />
            <Textarea
              accessibilityLabel={'Escolha uma menssagem'}
              placeholder="Escolha uma menssagem"
            />
            <View style={{ margin: 15 }} />
            <Button
              accessible={true}
              accessibilityLabel={'Pressione o botão para criar a notificação e navegar para a tela de lista de notifições'}
              title="Notificar"
              onPress={hadleNotificationList}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}