import React, { useState, useCallback } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { DATA } from '../../utils/NotificationEX';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { TextDropDown } from '../../components/TextDropDown';
import { NotificationCard } from '../../components/NotificationCard';
import { ModalView } from '../../components/ModelView';
import { NotificationFilter } from '../../components/NotificationFilter';

export function NotificationList() {

  const [OpenFiltersModal, setOpenFiltersModal] = useState(false);
  const [isfiltersVisible, setIsFiltersVisible] = useState(false);

  const [floor, setFloor] = useState('');
  const [local, setLocal] = useState('');
  const [priority, setPriority] = useState('');
  const [frequency, setFrequency] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [notifier, setNotifier] = useState('');

  /*
  async function hanleFiltersSumit() {
     
    const response = await DATA.values(
      params:{
        andar,
        local,
        prioridade,
        frequencia,
        categoria,
        mensagem,
        notificador,
        horas,
      }
    );
    setIsFiltersVisible(false);
  }
  */

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isfiltersVisible);
  }

  function handleOpenFilters() {
    setOpenFiltersModal(true);
  }

  function handleCloseFilters() {
    setOpenFiltersModal(false);
  }



  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        accessibilityLabel={'Lista de notificações'}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>


        <View style={styles.header}>
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', }}>
            <TextDropDown
              style={styles.selecionFloor}
              placeholder="Selecione um andar"
            />
            <RectButton
              onPress={handleOpenFilters}
              style={styles.headerfiltericon}>
              <MaterialIcons
                accessible={true}
                accessibilityLabel={'pressione o icone de filtro para filtrar'}
                name='filter-alt'
                size={32}
                color={theme.colors.primary}
              />
            </RectButton>
          </View>
        </View>


        <FlatList
          data={DATA}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <NotificationCard
              data={item}
            />
            /*
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
            */
          )}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          //onEndReached={({ distanceFromEnd }) => handleFethMores(distanceFromEnd)}
          //ListFooterComponent={ loadingMore ? <ActivityIndicator color={colors.green} /> : <></>}
          contentContainerStyle={{
            paddingTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <ModalView visible={OpenFiltersModal} closeModal={handleCloseFilters}>
          <NotificationFilter />
        </ModalView>

      </KeyboardAvoidingView>
    </Background>
  );
}