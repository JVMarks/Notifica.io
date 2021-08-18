import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import CirMei from '../../assets/circlesOpacity/meio-esquerdo.svg';
import CirDi from '../../assets/circlesOpacity/inferior-direito.svg';
import CirSuperi from '../../assets/circlesOpacity/superior-direito.svg';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { CreateAccont, CreateAccont2 } = theme.colors;

  return (

    <LinearGradient
      style={styles.container}
      colors={[CreateAccont, CreateAccont]}
    >
      <View style={{ position: 'absolute' }}>
        <CirSuperi
          width={325}
          height={325}
          style={{ top: -20, left: 65, position: 'absolute' }}
        />

        <CirDi
          width={150}
          height={150}
          style={{ bottom: -400, right: -250 }}
        />

        <CirMei
          width={250}
          height={250}
          style={{ bottom: -370, right: 140 }}
        />

      </View>

      {children}
    </LinearGradient>

  );
}