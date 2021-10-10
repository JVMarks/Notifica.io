import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';

interface NotificationProps extends TouchableOpacityProps {
  data: {
    id: number,
    theme: {
      id: number,
      nome: string,
    },
    title: string,
    scores?: string,
    message?: string,
    user: {
      name: string
    }
  }
}

export function FeedBackCard({ data, ...rest }: NotificationProps) {

  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View
        accessible={true}
        accessibilityLabel={"Informações do feedback"}
        style={styles.header}
      >
        <Text
          accessibilityLabel={data.title}
          style={styles.title}
        >
          {data.title}
        </Text>
        <RectButton style={styles.headerReadicon}>
          <Feather
            accessible={true}
            accessibilityLabel={"Opções da notificação"}
            name='more-horizontal'
            size={32}
            color={theme.colors.primary}
          />
        </RectButton>
      </View>

      <View style={styles.subheader}>
        <Text
          accessibilityLabel={data.theme.nome}
          style={styles.priority}
        >
          {data.theme.nome}
        </Text>
        <Text
          accessibilityLabel={data.scores}
          style={styles.category}
        >
          {data.scores}
        </Text>
      </View>

      <View style={styles.containerMessage}>
        <Text
          accessibilityLabel={data.message}
          style={styles.message}
        >
          {data.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
}