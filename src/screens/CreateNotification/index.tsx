import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, View, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        style={styles.container}>

        <SafeAreaView style={styles.formContainer}>
          <ScrollView style={{ marginBottom: 20 }}>
            <FormTitle title="Localização" />
            <ListDivider />
            <TextDropDown
              placeholder="Escolha uma andar" />
            <TextDropDown placeholder="Escolha uma local" />

            <FormTitle title="Prioridade" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma prioridade" />

            <FormTitle title="Frequência" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma frequência" />

            <FormTitle title="Categoria" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma Categoria" />

            <FormTitle title="Deixe uma menssagem" />
            <ListDivider />
            <Textarea placeholder="Escolha uma menssagem" />
          </ScrollView>
          <Button
            title="Notificar"
            onPress={hadleNotificationList}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}