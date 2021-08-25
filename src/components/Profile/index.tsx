import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@notificamanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <RectButton>
        <Avatar urlImage={'https://avatars.githubusercontent.com/u/50274461?v=4'} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {userName}
          </Text>
        </View>

        <Text style={styles.message}>
          Já fez uma boa ação hoje?
        </Text>
      </View>
    </View>
  )
}