import React from 'react';
import { View, ViewProps, Text } from 'react-native';
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
      <View style={styles.header}>
        <Text style={styles.title}>
          {data.local}
        </Text>
        <RectButton style={styles.headerReadicon}>
          <Feather
            name='more-horizontal'
            size={32}
            color={theme.colors.primary}
          />
        </RectButton>
      </View>

      <View style={styles.subheader}>
        <Text style={styles.priority}>
          {data.frequencia}
        </Text>
        <Text style={styles.category}>
          {data.categoria}
        </Text>
      </View>

      <View style={styles.containerMessage}>
        <Text style={styles.message}>
          {data.mensagem}
        </Text>
      </View>

      <View style={styles.containerBottom}>
        <Text style={styles.bottomText}>
          {`Notificado por ${data.notificador}`}
        </Text>
        <Text style={styles.bottomText}>
          {`às ${data.horas}`}
        </Text>
      </View>
    </RectButton>
  );
}