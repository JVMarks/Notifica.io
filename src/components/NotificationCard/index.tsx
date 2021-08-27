import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

interface NotificationProps extends RectButtonProps {
  data: {
    //andar: string,
    local: string,
    //prioridade: string,
    frequencia: string,
    categoria: string,
    mensagem?: string,
    notificador: string,
    horas: string
  }
}

export function NotificationCard({ data, ...rest }: NotificationProps) {

  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View
        accessible={true}
        accessibilityLabel={"Informações da notificação"}
        style={styles.header}
      >
        <Text
          accessibilityLabel={data.local}
          style={styles.title}
        >
          {data.local}
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
          accessibilityLabel={data.frequencia}
          style={styles.priority}
        >
          {data.frequencia}
        </Text>
        <Text
          accessibilityLabel={data.categoria}
          style={styles.category}
        >
          {data.categoria}
        </Text>
      </View>

      <View style={styles.containerMessage}>
        <Text
          accessibilityLabel={data.mensagem}
          style={styles.message}
        >
          {data.mensagem}
        </Text>
      </View>

      <View style={styles.containerBottom}>
        <Text
          accessibilityLabel={`Notificado por ${data.notificador}`}
          style={styles.bottomText}
        >
          {`Notificado por ${data.notificador}`}
        </Text>
        <Text
          accessibilityLabel={`às ${data.horas}`}
          style={styles.bottomText}
        >
          {`às ${data.horas}`}
        </Text>
      </View>
    </RectButton>
  );
}