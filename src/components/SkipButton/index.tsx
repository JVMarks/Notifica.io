import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { AntDesign } from '@expo/vector-icons';

export function SkipButton() {

  const navigation = useNavigation();

  function hadleToHome() {
    navigation.dispatch( StackActions.replace('Home'))
  }

  return (

    <View
      style={styles.container}
    >
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={'pressione o icone Home para ir para pagina inicial'}
        activeOpacity={0.6}
        onPress={hadleToHome}
      >
        <AntDesign
          size={38}
          name='home'
          color={theme.colors.primary}
        />
      </TouchableOpacity >
    </View>
  )

}