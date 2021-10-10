import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';
import { theme } from '../../global/styles/theme';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

export function CreateAccount() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDeficient, setisDeficient] = useState('');

  const navigation = useNavigation();

  function handleInputOption(value: string) {
    setisDeficient(value);
  }

  async function saveUser(user: any) {
    if (user) {
      try {
        await AsyncStorage.setItem('@d2a95sd84kp08r:users', JSON.stringify(user));
        console.log("TESTE saveUser", user)
      } catch (e) {
        console.log("erro", e)
      }
    }
  }

  async function hadleSubmit() {
    try {

      if (!password && !email && !name && !isDeficient) {
        return Alert.alert('Para criar a conta preciso do seu nome, e-mail, e senha 😬');
      }
      if (!name) {
        return Alert.alert('Me diz o seu nome 🥺');
      }
      if (!email) {
        return Alert.alert('Me diz o seu e-mail 😥');
      }
      if (!password) {
        return Alert.alert('Me diz sua senha 🤐');
      }
      if (!isDeficient) {
        return Alert.alert('👩 Por favor selecione uma das opções 👨');
      }

      if (isDeficient == "true") {

        const credentials = {
          name: name,
          email: email,
          password: password,
          pwd: true,
          active: true,
          //picture: "[B@79342daf",
          roles: [
            {
              authority: "ROLE_EMPLOYEE",
              id: 1
            }
          ]
        }

        const response = await api.post('/users', credentials)
        const user = response.data
        await saveUser(user)

        navigation.navigate('Confirmation', {
          title: 'Prontinho',
          subtitle: 'Agora você pode notificar o que acontece em sua empresa, primeiro pedimos que configure o app da forma que quiser',
          buttonTitle: 'Começar',
          icon: 'smille',
          nextScreen: 'Controls',
        })

      } else {

        const credentials = {
          name: name,
          email: email,
          password: password,
          pwd: false,
          active: true,
          //picture: "[B@79342daf",
          roles: [
            {
              authority: "ROLE_EMPLOYEE",
              id: 1
            }
          ]
        }

        const response = await api.post('/users', credentials)
        const user = response.data
        await saveUser(user)

        navigation.navigate('Confirmation', {
          title: 'Prontinho',
          subtitle: 'Agora você pode notificar o que acontece em sua empresa.',
          buttonTitle: 'Começar',
          icon: 'smille',
          nextScreen: 'Home',
        })
      }

    } catch (error) {
      Alert.alert('Não foi possivel criar a conta 😥')
      console.log("DEU PAU NA MAQUINA", error)
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
          width={180}
          height={180}
          style={{ top: 0 }}
        />
      </View>

      <View
        accessible={true}
        accessibilityLabel={'Tela de criação de conta'}
        style={styles.container}
      >

        <View
          accessible={true}
          accessibilityLabel={'Formulario de criação de novo usuario'}
          style={styles.containerForm}>

          <View style={styles.form}>
            <Text
              accessibilityLabel={'Bem vindo, complete os dados a seguir para finalizar sua conta'}
              style={styles.title}
            >
              Bem vindo, complete os dados a seguir para finalizar sua conta
            </Text>

            <View
              accessible={true}
              style={styles.containerInput}
            >
              <FormTitle
                accessibilityLabel={'Nome'}
                title="Nome" />
              <ListDivider />
              <Textarea
                accessible={true}
                accessibilityLabel={'Digite seu primeiro nome'}
                value={name}
                onChangeText={setName}
                placeholder="Digite seu primeiro nome"
              />

              <FormTitle
                accessibilityLabel={'Email'}
                title="Email"
              />
              <ListDivider />
              <Textarea
                accessible={true}
                accessibilityLabel={'Digite seu email'}
                value={email}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                placeholder="Digite seu email"
              />

              <FormTitle
                accessibilityLabel={'Senha'}
                title="Senha"
              />
              <ListDivider />
              <Textarea
                accessible={true}
                accessibilityLabel={'Digite sua senha'}
                value={password}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
              />

              <FormTitle
                accessibilityLabel={'Possui alguma deficiência? se sim selecione uma das opções'}
                title="Possui alguma deficiência?"
              />
              <ListDivider />
              <RadioButton.Group onValueChange={newValue => handleInputOption(newValue)} value={isDeficient}>
                <View
                  accessible={true}
                  style={styles.radioButton}
                >
                  <RadioButton value="false" color={theme.colors.heading} />
                  <Text accessibilityLabel={'Não'} style={styles.txtRadio}>Não</Text>
                  <RadioButton value="true" color={theme.colors.heading} />
                  <Text accessibilityLabel={'Sim'} style={styles.txtRadio}>Sim</Text>
                </View>
              </RadioButton.Group>

            </View>
          </View>

          <View
            accessible={true}
            accessibilityLabel={'Opções de botões logo a baixo'}
            style={styles.containerButton}
          >
            <Button
              accessible={true}
              accessibilityLabel={'Pressione o botão para criar conta'}
              title="Criar conta" onPress={hadleSubmit}
            />

            <TouchableOpacity
              accessible={true}
              accessibilityLabel={'Já tenho conta, pressione o botão para entrar na tela de login'}
              activeOpacity={0.6}
              onPress={hadleSingIn}
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