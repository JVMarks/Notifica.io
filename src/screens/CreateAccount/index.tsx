import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { saveUser, UserProps } from '../../libs/userStorage';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';


import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { theme } from '../../global/styles/theme';

interface Params {
  users: UserProps;
}

export function CreateAccount() {

  //Radio  button
  const [value, setValue] = React.useState('first');

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();
  // const route = useRoute();
  // const { users } = route.params as Params;

  function handleInputBluer() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputBluer2() {
    setIsFocused(false);
    setIsFilled(!!email);
  }

  function handleInputBluer3() {
    setIsFocused(false);
    setIsFilled(!!password);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleInputChange2(value: string) {
    setIsFilled(!!value);
    setEmail(value);
  }

  function handleInputChange3(value: string) {
    setIsFilled(!!value);
    setPassword(value);
  }

  async function hadleSubmit() {

    if (!password && !email && !name) {
      return Alert.alert('Preciso do seu nome, e-mail, e senha 😬');
    }
    if (!name) {
      return Alert.alert('Me diz o seu nome 🥺');
    }
    if (!email) {
      return Alert.alert('Me diz o seu e-mail 😥');
    }
    if (!password) {
      return Alert.alert('Digite sua senha 🤐');
    }

    try {

      await saveUser({
        name,
        email,
        password,
      });
      //await AsyncStorage.setItem('@notificamanager:users', name && email && password);

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos você pode notificar o que acontece em sua empresa.',
        buttonTitle: 'Começar',
        icon: 'smille',
        nextScreen: 'Home',
      })
    } catch {
      Alert.alert('Não foi possivel entrar na conta 😥')
    }
  }

  function hadleSingIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Background>

      <View
        accessible={true}
        accessibilityLabel={'Logo Notifica.Io'}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <LogoImg
          width={220}
          height={220}
          style={{ top: 0 }}
        />
      </View>

      <View
        accessible={true}
        accessibilityLabel={'Tela de criação de conta'}
        style={styles.container}>


        <View style={styles.containerForm}>

          <View style={styles.form}>
            <Text style={styles.title}>
              Bem vindo, complete os dados a seguir para finalizar sua conta
            </Text>

            <View style={styles.containerInput}>
              <FormTitle title="Nome" />
              <ListDivider />

              <Textarea
                onBlur={handleInputBluer}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                placeholder="Digite seu primeiro nome"
              />
              <FormTitle title="Email" />
              <ListDivider />

              <Textarea
                onBlur={handleInputBluer2}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange2}
                placeholder="Digite seu email"
              />
              <FormTitle title="Senha" />
              <ListDivider />

              <Textarea
                onBlur={handleInputBluer3}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange3}
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />
              <FormTitle title="Possui alguma deficiência?" />
              <ListDivider />
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radioButton}>
                  <RadioButton value="No" color={theme.colors.heading}/>
                  <Text style={styles.txtRadio}>Não</Text>
                  <RadioButton value="Yes" color={theme.colors.heading}/>
                  <Text style={styles.txtRadio}>Sim</Text>
                </View>
              </RadioButton.Group>
            </View>
          </View>

          <View style={styles.containerButton}>
            <Button
              accessible={true}
              title="Criar conta" onPress={hadleSubmit}
              accessibilityLabel={'Pressione o botão para criar conta'}
            />

            <TouchableOpacity
              accessible={true}
              activeOpacity={0.6}
              onPress={hadleSingIn}
              accessibilityLabel={'Já tenho conta pressione o botão para entrar na tela de login'}
            >
              <Text style={styles.loginButton}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

        </View>


      </View>
    </Background>
  );
}