import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

interface TextProp extends TextProps {
  title: string;
}

export function FormTitle({ title, ...rest }: TextProp) {
  return (
      <Text style={styles.text}>
        {title}
      </Text>
  );
}