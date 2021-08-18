import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import LogoImg from '../../assets/logo2.svg';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

export function CreateAccount() {
  const navigation = useNavigation();

  function hadleHome() {
    navigation.navigate('Home');
  }
  function hadleSingIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Background>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LogoImg
          width={250}
          height={250}
          style={{ top: 40 }}
        />
      </View>

      <View style={styles.container}>
        <View>

        </View>

        <View style={styles.containerForm}>

          <View style={styles.form}>
            <Text style={styles.title}>
              Bem vindo, complete os dados a seguir para finalizar sua conta
            </Text>

            <View style={styles.containerInput}>
              <FormTitle title="Nome" />
              <ListDivider />
              <Textarea placeholder="Digite seu primeiro nome" />
              <FormTitle title="Email" />
              <ListDivider />
              <Textarea placeholder="Digite seu email" />
              <FormTitle title="Senha" />
              <ListDivider />
              <Textarea
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <Button title="Criar conta" onPress={hadleHome} />

            <TouchableOpacity
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