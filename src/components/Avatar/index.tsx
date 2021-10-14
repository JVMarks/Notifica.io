import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImage: any;
}

export function Avatar({ urlImage }: Props) {
  const { white, on } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[white, on]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}