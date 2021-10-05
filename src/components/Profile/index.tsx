import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { Avatar } from '../Avatar';


export function Profile() {

  const navigation = useNavigation();

  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('');

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
    const name = JSON.parse(user || '').name;
    setUserName(name || '');
  }

  useEffect(() => {
    loadStorageUserName();
  }, []);

  function hadleControls() {
    navigation.navigate('Controls');
  }

  return (
    <View
      accessible={true}
      accessibilityLabel={'Seu perfil'}
      style={styles.container}>
      <TouchableOpacity
        onPress={hadleControls}
      >
        <Avatar urlImage={userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
      </TouchableOpacity>
      <View>
        <View style={styles.user}>
          <Text
            accessibilityLabel={'Olá,'}
            style={styles.greeting}>
            Olá,
          </Text>

          <Text
            accessibilityLabel={userName}
            style={styles.username}>
            {userName}
          </Text>
        </View>

        <Text
          accessibilityLabel={'Já fez uma boa ação hoje?'}
          style={styles.message}>
          Já fez uma boa ação hoje?
        </Text>
      </View>
    </View>
  )
}

/*
const fethUser = async () => {
  try {

    const credentials = {
      name: userName,
      //picture: userPicture
    }

    const userInfo = await api.post(`/users/`, credentials);

    const UserNameDetails = userInfo.data.name;
    //const UserNameDetails = userInfo.data.name.split('')[0];

    await AsyncStorage.setItem('@d2a95sd84kp08r:users', JSON.stringify(UserNameDetails));


    //setUserPicture('https://avatars.githubusercontent.com/u/50274461?v=4');
    //setUserPicture(result.data.content[0].picture || 'https://avatars.githubusercontent.com/u/50274461?v=4');

  } catch (error) {
    Alert.alert('Algo deu errado, tente novamente mais tarde');
    console.log("DEU PAU NA MAQUINA", error)
  }
};*/

/*
const fethUser = async () => {
  try {
    setLoading(true);

    const userInfo = await api.get(`/users/${user.id}`);

    const firstName = userInfo.data.name.split('')[0];

    const userData = {
      ...userInfo.data,
      firstName,
    }

    await AsyncStorage.setItem('@d2a95sd84kp08r:users', JSON.stringify(userData));
    setUser(userData);

    //setUserPicture('https://avatars.githubusercontent.com/u/50274461?v=4');
    //setUserPicture(result.data.content[0].picture || 'https://avatars.githubusercontent.com/u/50274461?v=4');

  } catch (error) {
    Alert.alert('Algo deu errado, tente novamente mais tarde');
    console.log("DEU PAU NA MAQUINA", error)
  } finally {
    setLoading(false);
  }
};*/

/*const fethUserName = async () => {
  try {
    const result = await api.get('/users')
    //const user = await AsyncStorage.getItem(result.data.content[].name);
    setUserName(result.data.content[0].name || '');

  } catch (error) {
    Alert.alert('Algo deu errado, tente novamente mais tarde');
    console.log("DEU PAU NA MAQUINA", error)
  }

  useEffect(() => {
    fethUser();
  }, []);

};*/