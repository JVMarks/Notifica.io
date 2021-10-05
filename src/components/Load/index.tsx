import React from 'react';
import { View } from 'react-native';
import LottiwView from 'lottie-react-native';

import { styles } from './styles';
import loadAnimation2 from '../../assets/teamwork.json';

export function Load() {
  return (
    <View style={styles.container}>
      <LottiwView
        source={loadAnimation2}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}