import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCenteredd?: boolean;
}

export function ListDividerControls({ isCenteredd }: Props) {
  return (
    <View
      style={[
        styles.container,
        isCenteredd ? {
          marginVertical: 12,
        } : {
          marginTop: 1,
          marginBottom: 7.5,
        }
      ]}
    />
  );
}