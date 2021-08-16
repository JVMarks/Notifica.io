import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Controls(){

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  /*
  function handleAppointmentCreate() {
    navigation.navigate('');
  }
  */

  return (
    <Background>
  
    </Background>
  );
}