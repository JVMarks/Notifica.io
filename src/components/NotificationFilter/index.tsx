import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, Platform, View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { TextDropDown } from '../../components/TextDropDown';

export function NotificationFilter() {
  const [OpenFiltersModal, setOpenFiltersModal] = useState(false);

  function handleCloseFilters() {
    setOpenFiltersModal(false);
  }

  return (
    <View style={styles.container}>

        <SafeAreaView style={styles.formContainer}>
          <ScrollView style={{ marginBottom: 20 }}>
            <FormTitle title="Localização" />
            <ListDivider />
            <TextDropDown
              placeholder="Escolha uma andar" />
            <TextDropDown placeholder="Escolha uma local" />

            <FormTitle title="Prioridade" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma prioridade" />

            <FormTitle title="Frequência" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma frequência" />

            <FormTitle title="Categoria" />
            <ListDivider />
            <TextDropDown placeholder="Escolha uma Categoria" />

            <FormTitle title="Deixe uma menssagem" />
            <ListDivider />
            <Textarea placeholder="Escolha uma menssagem" />
          </ScrollView>
          <Button
            title="Filtrar"
            onPress={handleCloseFilters}
          />
        </SafeAreaView>
    </View>
  );
}