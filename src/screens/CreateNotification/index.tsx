import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View, Alert } from 'react-native';

import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';

import { Load } from '../../components/Load';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

type FloorProps = {
  id: number,
  name: string
}

type LocationsProps = {
  id: number,
  name: string
}

type PrioritiesProps = {
  id: number,
  name: string
}

type FrequenciesProps = {
  id: number,
  name: string
}

type CategoriesProps = {
  id: number,
  name: string
}

export function CreateNotification() {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const [floors, setFloors] = useState<FloorProps[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<FloorProps>();
  const [priorities, setPriorities] = useState<PrioritiesProps[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<PrioritiesProps>();
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoriesProps>();
  const [frequencies, setFrequencies] = useState<FrequenciesProps[]>([]);
  const [selectedFrequencies, setSelectedFrequencies] = useState<FrequenciesProps>();
  const [locations, setLocations] = useState<LocationsProps[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<LocationsProps>();
  const [message, setMessage] = useState('');

  const fetchFloors = async () => {
    try {

      const result = await api.get(`/floors`);

      if (!result) {
        return setLoading(true)
      } else {
        setFloors(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchLocations = async () => {
    try {

      const result = await api.get(`/locations`);

      if (!result) {
        return setLoading(true)
      } else {
        setLocations(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchPriorities = async () => {
    try {

      const result = await api.get(`/priorities`);

      if (!result) {
        return setLoading(true)
      } else {
        setPriorities(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchFrequencies = async () => {
    try {

      const result = await api.get(`/frequencies`);

      if (!result) {
        return setLoading(true)
      } else {
        setFrequencies(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchCategories = async () => {
    try {

      const result = await api.get(`/categories`);

      if (!result) {
        return setLoading(true)
      } else {
        setCategories(result.data.content);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  useEffect(() => {
    fetchFloors();
    fetchLocations();
    fetchPriorities();
    fetchFrequencies();
    fetchCategories();
  }, []);

  async function hadleCreateNotification() {
    try {
      const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
      const userID = JSON.parse(user || '').id;

      const notificationDentails = {
        message: message,
        user: {
          id: userID
        },
        location: {
          id: selectedLocations,
          floor: {
            id: selectedFloor
          }
        },
        priority: {
          id: selectedPriorities
        },
        frequency: {
          id: selectedFrequencies
        },
        category: {
          id: selectedCategories
        },
        active: true
      }

      api.post('/notifications', notificationDentails)

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Sua notificação será enviada para seus colegas',
        buttonTitle: 'Agradecemos sua contribuição',
        icon: 'smille',
        nextScreen: 'NotificationList',
      });

    } catch {
      Alert.alert('Não foi possivel salvar sua notificação🔔');
    }
  }

  if (loading)
    return <Load />

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        accessibilityLabel={'Tela criação de notificação'}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      >
        <SafeAreaView
          accessible={true}
          style={styles.formContainer}
          accessibilityLabel={'Formulario para criação de notificação'}
        >
          <ScrollView>
            <FormTitle
              accessibilityLabel={'Localização'}
              title="Localização"
            />
            <ListDivider />

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

            <View style={styles.input}>
              <Picker
                accessible={true}
                accessibilityLabel={selectedLocations?.name}
                mode='dialog'
                selectedValue={selectedLocations}
                onValueChange={itemValue => setSelectedLocations(itemValue)}
              >
                {locations?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
              </Picker>
            </View>

            <FormTitle
              accessibilityLabel={'Categoria'}
              title="Categoria"
            />
            <ListDivider />

            <View style={styles.input}>
              <Picker
                accessible={true}
                accessibilityLabel={selectedCategories?.name}
                mode='dialog'
                selectedValue={selectedCategories}
                onValueChange={itemValue => setSelectedCategories(itemValue)}
              >
                {categories?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
              </Picker>
            </View>

            <FormTitle
              accessibilityLabel={'Prioridade'}
              title="Prioridade"
            />
            <ListDivider />

            <View style={styles.input}>
              <Picker
                accessible={true}
                accessibilityLabel={selectedPriorities?.name}
                mode='dialog'
                selectedValue={selectedPriorities}
                onValueChange={itemValue => setSelectedPriorities(itemValue)}
              >
                {priorities?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
              </Picker>
            </View>

            <FormTitle
              accessibilityLabel={'Frequência'}
              title="Frequência"
            />
            <ListDivider />

            <View style={styles.input}>
              <Picker
                accessible={true}
                accessibilityLabel={selectedFrequencies?.name}
                mode='dialog'
                selectedValue={selectedFrequencies}
                onValueChange={itemValue => setSelectedFrequencies(itemValue)}
              >
                {frequencies?.map((itemValue) => {
                  return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
                })}
              </Picker>
            </View>

            <FormTitle
              accessibilityLabel={'Deixe uma menssagem'}
              title="Deixe uma menssagem"
            />
            <ListDivider />
            <Textarea
              accessibilityLabel={'Deixe uma menssagem'}
              placeholder="Deixe uma menssagem"
              value={message}
              onChangeText={message => setMessage(message)}
            />
            <View style={{ margin: 15 }} />
            <Button
              accessible={true}
              accessibilityLabel={'Pressione o botão para criar a notificação e navegar para a tela de lista de notifições'}
              title="Notificar"
              onPress={hadleCreateNotification}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}