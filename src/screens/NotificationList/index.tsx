import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { api } from '../../services/api';
import { Picker } from '@react-native-picker/picker';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

import { Load } from '../../components/Load';
import { ModalView } from '../../components/ModelView';
import { Background } from '../../components/Background';
import { NotificationCard } from '../../components/NotificationCard';
import { NotificationFilter } from '../../components/NotificationFilter';

interface NotificationProps {
  id: number,
  message?: string,
  moment: string,
  category: any,
  frequency: any,
  location: any,
  priorty: any,
  user: any
}

type FloorProps = {
  id: number,
  name: string
}
export function NotificationList() {

  //Estado para funcionamento do filtro
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const [filteredNotifica, setFilteredNotifica] = useState<NotificationProps[]>([]);

  //Filter
  const [floors, setFloors] = useState<FloorProps[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<FloorProps>();
  const [OpenFiltersModal, setOpenFiltersModal] = useState(false);

  const fetchFloors = async () => {
    try {
      const result = await api.get(`/floors`);
      setFloors(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  function handleOpenFilters() {
    setOpenFiltersModal(true);
  };

  function handleCloseFilters() {
    setOpenFiltersModal(false);
  }

  //Load
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  async function fetchNotifications() {
    try {
      const result = await api.get(`/notifications`);

      if (!result) {
        return setLoading(true)
      }
      if (page > 1) {
        setNotifications(oldValue => [...oldValue, ...result.data.content])
        setFilteredNotifica(oldValue => [...oldValue, ...result.data.content]);
      } else {
        setNotifications(result.data.content);
        setFilteredNotifica(result.data.content);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchNotifications();
  }

  useEffect(() => {
    fetchFloors();
    fetchNotifications();
  }, [])

  /*useEffect(() => {
    console.log("useEffect", notifications)
  }, [notifications])*/

  if (loading)
    return <Load />

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        accessibilityLabel={'Tela lista de notificações'}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View
          accessible={true}
          accessibilityLabel={'seleção de filtros'}
          style={styles.header}
        >
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
            <View style={styles.input}>
              <Picker
                mode='dialog'
                selectedValue={selectedFloor}
                onValueChange={itemValue => setSelectedFloor(itemValue)}
              >
                {floors?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
              </Picker>
            </View>
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          accessible={true}
          accessibilityLabel={"lista de notifiçãoes do dia"}
          data={filteredNotifica}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <NotificationCard
              data={item}
              onPress={() => null}
            />
          )}
          numColumns={1}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={loadingMore ? <ActivityIndicator color={theme.colors.secondary100} /> : <></>}
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
        >
          <NotificationFilter closeModal={handleCloseFilters} />
        </ModalView>

      </KeyboardAvoidingView>
    </Background>
  );
}