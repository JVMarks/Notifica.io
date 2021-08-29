import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

export function SignIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();

  function handleInputEmail(value: string) {
    setEmail(value);
  }

  function handleInputPassword(value: string) {
    setPassword(value);
  }

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  async function hadleSubmit() {

    if (!password && !email) {
      return Alert.alert('Preciso do E-mail, e senha registrados no sistema 😬');
    }
    if (!email) {
      return Alert.alert('Por favor, me diz o seu E-mail para eu saber quem você é 😥');
    }
    if (!password) {
      return Alert.alert('Por favor, digite sua senha corretamente 🤐');
    }

    try {
      await AsyncStorage.setItem('@notificamanager:users', email && password);
      navigation.navigate('Home')
    } catch {
      Alert.alert('Não foi possivel entrar na conta 😥')
    }
  }

  return (
    <Background>

      <View
        accessible={true}
        accessibilityLabel={'Logo Notifica.Io'}
        style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LogoImg
          width={220}
          height={220}
          style={{ top: 95 }}
        />
      </View>

      <View
        accessible={true}
        accessibilityLabel={'Tela de formulario de login'}
        style={styles.container}>
        <View style={styles.containerForm}>

          <View style={styles.form}>
            <Text
              accessible={true}
              accessibilityLabel={'Olá novamente, insira os dados para entrar'}
              style={styles.title}>
              Olá novamente, insira os dados para entrar
            </Text>

            <View style={styles.containerInput}>
              <FormTitle
                accessibilityLabel={'Email'}
                title="Email" />
              <ListDivider />

              <Textarea
                accessibilityLabel={'Digite seu email cadastrado'}
                onChangeText={handleInputEmail}
                placeholder="Digite seu email"
              />

              <FormTitle
                accessibilityLabel={'Senha'}
                title="Senha" />
              <ListDivider />

              <Textarea
                accessibilityLabel={'Digite sua senha cadastrada'}
                onChangeText={handleInputPassword}
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />

            </View>
          </View>

          <View
            accessible={true}
            accessibilityLabel={'Opções de botões logo a baixo'}
            style={styles.containerButton}>
            <Button
              title="Entrar"
              accessible={true}
              onPress={hadleSubmit}
              accessibilityLabel={'Pressione o botão para entrar'}
            />

            <TouchableOpacity
              accessible={true}
              activeOpacity={0.6}
              onPress={hadleCreateAccount}
              accessibilityLabel={'Pressione o botão para criar uma conta'}
            >
              <Text
                accessibilityLabel={'Criar uma conta'}
                style={styles.loginButton}>
                Criar uma conta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Background>
  );
}