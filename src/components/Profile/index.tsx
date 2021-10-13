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
        <Avatar urlImage={userAvatar || 'https://logodownload.org/wp-content/uploads/2019/08/dow-chemical-logo-0.png'} />
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
          accessibilityLabel={'Colabore com o próximo, notifique!'}
          style={styles.message}>
          Colabore com o próximo, notifique!
        </Text>
      </View>
    </View>
  )
}

//'https://cdn-icons-png.flaticon.com/512/149/149071.png'