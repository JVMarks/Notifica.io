import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { Avatar } from '../Avatar';

import { DATA } from '../../utils/NotificationEX';


export function Profile() {

  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      //const user = await AsyncStorage.getItem(DATA[2].notificador);
      const user = DATA[1].notificador;
      setUserName(user || '');
    }

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
        <Avatar urlImage={'https://avatars.githubusercontent.com/u/50274461?v=4'} />
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