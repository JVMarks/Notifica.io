import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import Animated from 'react-native-reanimated';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

export interface NotificationProps extends TouchableOpacityProps {
  data: {
    id: number,
    message?: string,
    moment: string,
    category: {
      name: string,
      id: number
    },
    frequency: {
      name: string,
      id: number
    },
    location: {
      floor: {
        name: string,
        id: number
      },
      name: string
    }
    priorty: {
      name: string,
      id: number
    }
    user: {
      name: string
    }
  },
  handleRemove: () => void;
}

export function NotificationCard({ data, handleRemove, ...rest }: NotificationProps) {

  return (

    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather
                name="trash"
                size={32}
                color={theme.colors.white}
              />

            </RectButton>
          </View>
        </Animated.View>
      )}
    >


      <TouchableOpacity
        style={styles.container}
        {...rest}
      >
        <View
          accessible={true}
          accessibilityLabel={"Informações da notificação"}
          style={styles.header}
        >
          <Text
            accessibilityLabel={data.location.name}
            style={styles.title}
          >
            {data.location.name}
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
            accessibilityLabel={data.frequency.name}
            style={styles.priority}
          >
            {data.frequency.name}
          </Text>
          <Text
            accessibilityLabel={data.category.name}
            style={styles.category}
          >
            {data.category.name}
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

        <View style={styles.containerBottom}>
          <Text
            accessibilityLabel={`Notificado por ${data.user.name}`}
            style={styles.bottomText}
          >
            {`Notificado por ${data.user.name}`}
          </Text>
          <Text
            accessibilityLabel={`às ${data.moment}`}
            style={styles.bottomText}
          >
            {`às ${data.moment}`}
          </Text>
        </View>
      </TouchableOpacity>

    </Swipeable>
  );
}