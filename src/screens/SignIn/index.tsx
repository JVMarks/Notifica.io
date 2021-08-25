import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native';

//import { UserProps, loadUser } from '../../libs/userStorage';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';
import { theme } from '../../global/styles/theme';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

export function SignIn() {

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();

  function handleInputBluer() {
    setIsFocused(false);
    setIsFilled(!!email);
    setIsFilled(!!password);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setEmail(value);
    setPassword(value);
  }

  async function hadleSubmit() {

    if (!password && !email) {
      return Alert.alert('Preciso do seu e-mail, e senha 😬');
    }
    if (!email) {
      return Alert.alert('Me diz o seu e-mail 😥');
    }
    if (!password) {
      return Alert.alert('Digite sua senha 🤐');
    }

    try {

      await AsyncStorage.setItem('@notificamanager:users', email && password);
      navigation.navigate('Home')
    } catch {
      Alert.alert('Não foi possivel entrar na conta 😥')
    }
  }

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  return (
    <Background>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LogoImg
          width={220}
          height={220}
          style={{ top: 95 }}
        />
      </View>

      <View
        accessible={true}
        accessibilityLabel={'Formulario de login'}
        style={styles.container}>
        <View style={styles.containerForm}>

          <View style={styles.form}>
            <Text style={styles.title}>
              Olá novamente, insira os dados para entrar
            </Text>

            <View style={styles.containerInput}>
              <FormTitle title="Email" />
              <ListDivider />

              <Textarea
                onBlur={handleInputBluer}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                placeholder="Digite seu email"
              />

              <FormTitle title="Senha" />
              <ListDivider />

              <Textarea
                onBlur={handleInputBluer}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />

            </View>
          </View>

          <View style={styles.containerButton}>
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
              <Text style={styles.loginButton}>
                Criar uma conta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Background>
  );
}