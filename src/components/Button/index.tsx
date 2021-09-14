import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface buttonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: buttonProps) {
  return (
    <TouchableOpacity 
    style={styles.container} 
    activeOpacity={0.6}
    {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}