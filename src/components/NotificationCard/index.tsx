import React from 'react';
<<<<<<< HEAD
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
=======
import { View, Text } from 'react-native';
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

<<<<<<< HEAD
interface NotificationProps extends TouchableOpacityProps {
=======
interface NotificationProps extends RectButtonProps {
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
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
<<<<<<< HEAD
    <TouchableOpacity
=======
    <RectButton
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
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
<<<<<<< HEAD
    </TouchableOpacity>
=======
    </RectButton>
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
  );
}