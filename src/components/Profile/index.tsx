import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {



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
            {`Valdineido`}
          </Text>
        </View>

        <Text style={styles.message}>
          Já fez uma boa ação hoje?
        </Text>
      </View>
    </View>
  )
}