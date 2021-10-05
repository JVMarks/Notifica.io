import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface buttonProps extends RectButtonProps {
  data: {
    title: string,
    icon: any,
  }
}

export function ButtonSelection({ data, ...rest }: buttonProps) {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={0.6}
      {...rest}
    >
      <Text style={styles.text}>
        {data.title}
      </Text>
    </RectButton>
  );
}