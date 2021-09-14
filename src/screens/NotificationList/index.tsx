import React, { useState, useCallback } from 'react';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
=======
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f

import { DATA } from '../../utils/NotificationEX';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

import { ModalView } from '../../components/ModelView';
import { Background } from '../../components/Background';
import { TextDropDown } from '../../components/TextDropDown';
import { NotificationCard } from '../../components/NotificationCard';
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
        accessibilityLabel={'Tela lista de notificações'}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>


        <View
          accessible={true}
          accessibilityLabel={'seleção de filtros'}
          style={styles.header}
        >
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', }}>
            <TextDropDown
              accessible={true}
              accessibilityLabel={'Selecione um andar'}
              style={styles.selecionFloor}
              placeholder="Selecione um andar"
            />
<<<<<<< HEAD
            <TouchableOpacity
=======
            <RectButton
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
              onPress={handleOpenFilters}
              style={styles.headerfiltericon}
            >
              <MaterialIcons
                accessible={true}
                accessibilityLabel={'Pressione o icone de filtro para filtrar'}
                name='filter-alt'
                size={32}
                color={theme.colors.primary}
              />
<<<<<<< HEAD
            </TouchableOpacity>
=======
            </RectButton>
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
          </View>
        </View>


        <FlatList
          accessible={true}
          accessibilityLabel={"lista de notifiçãoes do dia"}
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

        <ModalView
          accessibilityLabel={'filtro ativado para selecionar as opções'}
          accessible={true}
          visible={OpenFiltersModal}
          closeModal={handleCloseFilters}
        >
          <NotificationFilter />
        </ModalView>

      </KeyboardAvoidingView>
    </Background>
  );
}