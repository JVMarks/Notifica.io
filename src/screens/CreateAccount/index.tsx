import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';
import { theme } from '../../global/styles/theme';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

interface UsersProps {
  name: string,
  email: string,
  password: string,
  pwd: boolean,
}

export function CreateAccount() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDeficient, setisDeficient] = useState('');
  const [test, setTest] = useState<UsersProps[]>([]);

  const navigation = useNavigation();

  function handleInputOption(value: string) {
    setisDeficient(value);
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

      if (isDeficient == 'Yes') {

        api.post('/users', {

            //id: 3,
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
      
        })


        navigation.navigate('Controls')

      } else {

        api.post('/users', {

          //id: 3,
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
        })

        navigation.navigate('Confirmation', {
          title: 'Prontinho',
          subtitle: 'Agora vamos você pode notificar o que acontece em sua empresa.',
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

  const fetchFloors = async () => {
    const result = await api.get(`/users`);
    setTest(result.data.content);
    console.log(result.data.content)
  };

  useEffect(() => {
    fetchFloors();
    console.log(test)
  }, [])

  useEffect(() => {
    console.log('UseEffect ', test)

  }, [test])


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
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry={true}
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
                  <RadioButton value="No" color={theme.colors.heading} />
                  <Text accessibilityLabel={'Não'} style={styles.txtRadio}>Não</Text>
                  <RadioButton value="Yes" color={theme.colors.heading} />
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