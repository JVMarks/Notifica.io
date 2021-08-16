import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function TextDropDown({...rest}: TextInputProps){
  return(
    <TextInput
    style={styles.container}
    placeholderTextColor={theme.colors.highlight}
    {...rest}
    />
  )
}