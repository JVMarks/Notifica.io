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

        <CirMei
          width={120}
          height={120}
          style={{ top: 340, left: 78 }}
        />

        <CirDi
          width={180}
          height={180}
          style={{ bottom: -300, right: -220 }}
        />

        <CirMei
          width={180}
          height={180}
          style={{ bottom: -240, right: 80 }}
        />

      </View>

      {children}
    </LinearGradient>

  );
}