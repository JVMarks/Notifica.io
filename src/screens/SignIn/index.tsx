import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { ListDivider } from '../../components/ListDivider';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';

export function SignIn() {

  const navigation = useNavigation();

  function hadleHome() {
    navigation.navigate('Home');
  }

  function hadleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  return (
    <Background>

      <View style={styles.container}>
        <View>

        </View>

        <View style={styles.containerForm}>
          <View style={styles.form}>
            <Text style={styles.title}>
              Olá novamente, insira os dados para entrar
            </Text>

            <View style={styles.containerInput}>
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
            <Button title="Entrar" onPress={hadleHome} />

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={hadleCreateAccount}
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