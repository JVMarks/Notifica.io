import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Textarea({...rest}: TextInputProps){
  return(
    <TextInput
    style={styles.container}
    placeholderTextColor={theme.colors.highlight}
    {...rest}
    />
  )
}