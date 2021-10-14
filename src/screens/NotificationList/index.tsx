import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Text
} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import { api } from '../../services/api';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { Load } from '../../components/Load';
import { ModalView } from '../../components/ModelView';
import { Background } from '../../components/Background';
import { NotificationCard } from '../../components/NotificationCard';
import { CategoriesProps, FloorProps, FrequenciesProps, LocationsProps, NotificationFilter, PrioritiesProps } from '../../components/NotificationFilter';
import { filterBy } from '../../libs/filterby';


export interface NotificationProps {
  id: number,
  message?: string,
  moment: string,
  category: any,
  frequency: any,
  location: any,
  priorty: any,
  user: any
}

export function NotificationList() {


  const navigation = useNavigation();

  function hadleToHome() {
    navigation.dispatch(StackActions.replace('Home'))
  }

  //Estado para funcionamento do filtro
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const [filteredNotifica, setFilteredNotifica] = useState<NotificationProps[]>([]);

  //Filter
  const [OpenFiltersModal, setOpenFiltersModal] = useState(false);

  const [selectedLocations, setSelectedLocations] = useState<LocationsProps>();
  const [selectedFrequencies, setSelectedFrequencies] = useState<FrequenciesProps>();
  const [selectedCategories, setSelectedCategories] = useState<CategoriesProps>();
  const [selectedPriorities, setSelectedPriorities] = useState<PrioritiesProps>();
  const [selectedFloor, setSelectedFloor] = useState<FloorProps>();

  async function handleOpenFilters() {
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
      const result = await api.get(`/notifications?sort=id,desc`);

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

  //Romove
  async function removeNotification(id: number): Promise<void> {
    try {
      api.put(`/notifications/${id}/disableNotification`)
    } catch (error) {
      Alert.alert('Não foi possivel salvar sua notificação🔔');
    }
  }

  function handleRemove(filteredNotifica: NotificationProps) {
    Alert.alert('Remover', `Deseja remover a ${filteredNotifica.message}?`, [
      {
        text: 'Não 😮',
        style: 'cancel'
      },
      {
        text: 'Sim 😅',
        onPress: async () => {
          try {
            await removeNotification(filteredNotifica.id);
            setFilteredNotifica((oldData) => (
              oldData.filter((item) => item.id !== filteredNotifica.id)
            ));
          } catch (error) {
            Alert.alert('Não foi possivel remover! 😮');
          }
        }
      }
    ])
  }

  useEffect(() => {
    fetchNotifications();
  }, [])

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
          <View style={styles.headercontainer}>
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
        {
          filteredNotifica.length > 0 ?
            <FlatList
              accessible={true}
              accessibilityLabel={"lista de notifiçãoes do dia"}
              data={filteredNotifica}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <NotificationCard
                  data={item}
                  handleRemove={() => { handleRemove(item) }}
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
            : <View style={styles.loadingcontainer}><Text style={styles.loadingtxt}>No momento não temos nenhuma notificação</Text></View>
        }

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