import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import Animated from 'react-native-reanimated';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

interface NotificationProps extends TouchableOpacityProps {
  data: {
    id: number,
    theme: string
    title: string,
    comment?: string,
    moment: string,
    user: {
      id: number,
      name: string
    }
  },
  handleRemove: () => void;
}

export function FeedBackCard({ data, handleRemove, ...rest }: NotificationProps) {

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
            accessibilityLabel={data.theme}
            style={styles.priority}
          >
            {data.theme}
          </Text>
        </View>

        <View style={styles.containerMessage}>
          <Text
            accessibilityLabel={data.comment}
            style={styles.message}
          >
            {data.comment}
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