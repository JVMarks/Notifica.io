import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { FormTitle } from '../../components/FormTitle';
import { ListDivider } from '../../components/ListDivider';
import { TextDropDown } from '../../components/TextDropDown';

export function NotificationFilter() {
  const [OpenFiltersModal, setOpenFiltersModal] = useState(false);

  function handleCloseFilters() {
    setOpenFiltersModal(false);
  }

  return (
    <View
      accessible={true}
      accessibilityLabel={"Filtre as notificações com as opções disponiveis"}
      style={styles.container}
    >

      <SafeAreaView style={styles.formContainer}>
        <ScrollView style={{ marginBottom: 20 }}>
          <FormTitle
            accessibilityLabel={"Localização"}
            title="Localização"
          />
          <ListDivider />
          <TextDropDown
            accessible={true}
            accessibilityLabel={"Escolha uma andar"}
            placeholder="Escolha uma andar"
          />
          <TextDropDown
            accessible={true}
            accessibilityLabel={"Escolha uma local"}
            placeholder="Escolha uma local"
          />

          <FormTitle
            accessibilityLabel={"Prioridade"}
            title="Prioridade"
          />
          <ListDivider />
          <TextDropDown
            accessible={true}
            accessibilityLabel={"Escolha uma prioridade"}
            placeholder="Escolha uma prioridade"
          />

          <FormTitle
            accessibilityLabel={"Frequência"}
            title="Frequência"
          />
          <ListDivider />
          <TextDropDown
            accessible={true}
            accessibilityLabel={"Escolha uma frequência"}
            placeholder="Escolha uma frequência"
          />

          <FormTitle
            accessibilityLabel={"Categoria"}
            title="Categoria"
          />
          <ListDivider />
          <TextDropDown
            accessible={true}
            accessibilityLabel={"Escolha uma Categoria"}
            placeholder="Escolha uma Categoria"
          />
        </ScrollView>
        <Button
          accessible={true}
          accessibilityLabel={"Pressione o botão para filtrar as notificações"}
          title="Filtrar"
          onPress={handleCloseFilters}
        />
      </SafeAreaView>
    </View>
  );
}