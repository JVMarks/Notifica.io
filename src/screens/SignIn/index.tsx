import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function saveUser(user: any) {
    if (user) {
      try {
        await AsyncStorage.setItem('@d2a95sd84kp08r:users', JSON.stringify(user));
        //console.log("TESTE saveUser", user)
      } catch (e) {
        console.log("erro", e)
      }
    }
  }

  async function hadleSubmit() {
    try {

      if (!password && !email) {
        return Alert.alert('Preciso do E-mail, e senha registrados no sistema 😬');
      }
      else if (!email) {
        return Alert.alert('Por favor, me diz o seu E-mail para eu saber quem você é 😥');
      }
      else if (!password) {
        return Alert.alert('Por favor, digite sua senha corretamente 🤐');
      } else {

        const credentials = {
          email: email,
          password: password
        }

        const response = await api.post('/users/login/', credentials)
        const user = response.data
        await saveUser(user)

        const resetAction = navigation.dispatch(
          StackActions.replace('Home', {
            user: email,
          })
        );
      }
    } catch (error) {
      if (error == 404) {
        Alert.alert('Não conseguimos se conectar, tente novamente 🏎')
      } else if (error = 422) {
        Alert.alert('Senha ou Email incorreta, tente novamete 🏦')
      } else {
        Alert.alert('Não foi possivel entrar na conta 😥')
      }
      console.log("Deu pau na maquina", error);
    }
  }

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
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
                value={email}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => setEmail(email)}
                placeholder="Digite seu email"
                underlineColorAndroid="rgba(0, 0, 0, 0)"
              />

              <FormTitle
                accessibilityLabel={'Senha'}
                title="Senha" />
              <ListDivider />

              <Textarea
                accessibilityLabel={'Digite sua senha cadastrada'}
                value={password}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                placeholder="Digite sua senha"
                underlineColorAndroid="rgba(0, 0, 0, 0)"
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