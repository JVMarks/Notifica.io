import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Alert, ViewProps } from 'react-native';

import { styles } from './styles';
import { api } from '../../services/api';
import { Picker } from '@react-native-picker/picker';

import { Button } from '../../components/Button';
import { FormTitle } from '../../components/FormTitle';
import { ListDivider } from '../../components/ListDivider';
import { NotificationProps } from '../NotificationCard';

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

type Props = ViewProps & {
  closeModal: () => void;
}

export function NotificationFilter({ closeModal }: Props) {

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

  //const filteredByFloors = selectedFloor.filter()

  async function filterBy(floorId: number, locationName: string, priorityId: number, frequencyId: number, categoryId: number): Promise<void> {
    api.get(`/notifications/filter?floorId=${floorId}&locationName=${locationName}&priorityId=${priorityId}&frequencyId=${frequencyId}&categoryId=${categoryId}`)
  }

  async function handleFilterby(notification: NotificationProps) {
    try {
      await filterBy(
        notification.data.location.floor.id,
        notification.data.location.name,
        notification.data.priorty.id,
        notification.data.frequency.id,
        notification.data.category.id
      );

      setFloors((oldData) => (
        oldData.filter((item) => item.id === notification.data.location.floor.id)
      ));

      setLocations((oldData) => (
        oldData.filter((item) => item.name === notification.data.location.name)
      ));

      setPriorities((oldData) => (
        oldData.filter((item) => item.id !== notification.data.priorty.id)
      ));

      setCategories((oldData) => (
        oldData.filter((item) => item.id !== notification.data.category.id)
      ));

      setFrequencies((oldData) => (
        oldData.filter((item) => item.id !== notification.data.frequency.id)
      ));
      closeModal
    } catch (error) {
      Alert.alert('Não foi possivel remover! 😮');
      console.log('DEU PAU NA MAQUINA', error);
    }
  }

  useEffect(() => {
    handleFilterby;
  }, [])


  /*
  setSelectedLocations(location);
  setSelectedPriorities(prioritie);
  setSelectedCategories(categorie);
  setSelectedFrequencies(frequencie);
  
  if (location == 'all') {
    //return setFilteredbyLocation(notifications);
  } else if (prioritie == 'all') {
    //return setFilteredByPrioritie(notifications);
  } else if (categorie == 'all') {
    //return setFilteredByCategorie(notifications);
  } else if (frequencie == 'all') {
    //return setFilteredByFrequencie(notifications);
  }
  
  const filTeredLocation = locations.filter(locations => locations.name.includes(location))
  const filTeredPrioritie = priorities.filter(priorities => priorities.name.includes(prioritie))
  const filTeredCategorie = categories.filter(categories => categories.name.includes(categorie))
  const filTeredFrequencie = frequencies.filter(frequencies => frequencies.name.includes(frequencie))
  
  setFilteredbyLocation(filTeredLocation);
  setFilteredByPrioritie(filTeredPrioritie);
  setFilteredByCategorie(filTeredCategorie);
  setFilteredByFrequencie(filTeredFrequencie);
  closeModal;
}
  */

  const fetchFloors = async () => {
    try {

      const result = await api.get(`/floors`);
      setFloors(result.data.content);

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchLocations = async () => {
    try {

      const result = await api.get(`/locations`);
      setLocations(result.data.content);

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchPriorities = async () => {
    try {

      const result = await api.get(`/priorities`);
      setPriorities(result.data.content);

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchFrequencies = async () => {
    try {

      const result = await api.get(`/frequencies`);
      setFrequencies(result.data.content);

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchCategories = async () => {
    try {

      const result = await api.get(`/categories`);
      setCategories(result.data.content);

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

  return (
    <View
      accessible={true}
      accessibilityLabel={"Filtre as notificações com as opções disponiveis"}
      style={styles.container}
    >

      <SafeAreaView style={styles.formContainer}>
        <ScrollView style={{ marginBottom: 20 }}>

          <FormTitle
            accessibilityLabel={'Localização'}
            title="Localização"
          />
          <ListDivider />

          <View style={styles.input}>
            <Picker
              accessible={true}
              accessibilityLabel={selectedFloor?.name}
              mode='dialog'
              selectedValue={selectedFloor}
              onValueChange={itemValue => setSelectedFloor(itemValue)}
            >
              <Picker.Item label="Todos os Andares" value="all" key={0} />
              {floors?.map((itemValue) => {
                return (
                  <Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
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
              <Picker.Item label="Todos os locais" value="all" key={0} />
              {locations?.map((itemValue) => {
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
              <Picker.Item label="Todos as prioridades" value="all" key={0} />
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
              <Picker.Item label="Todos as frequencias" value="all" key={0} />
              {frequencies?.map((itemValue) => {
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
              <Picker.Item label="Todos as categorias" value="all" key={0} />
              {categories?.map((itemValue) => {
                return (<Picker.Item label={itemValue.name} value={itemValue.id} key={itemValue.id} />)
              })}
            </Picker>
          </View>

        </ScrollView>
        <Button
          accessible={true}
          accessibilityLabel={"Pressione o botão para filtrar as notificações"}
          title="Filtrar"
          onPress={closeModal}
        />
      </SafeAreaView>
    </View>
  );
}