import React, { useState, useCallback, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Alert, ViewProps } from 'react-native';

import { styles } from './styles';
import { api } from '../../services/api';
import { Picker } from '@react-native-picker/picker';

import { Button } from '../../components/Button';
import { FormTitle } from '../../components/FormTitle';
import { ListDivider } from '../../components/ListDivider';

/*
type FloorProps = {
  id: number,
  name: string
}*/

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

  //const [floors, setFloors] = useState<FloorProps[]>([]);
  //const [selectedFloor, setSelectedFloor] = useState<FloorProps>();
  const [priorities, setPriorities] = useState<PrioritiesProps[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<PrioritiesProps>();
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoriesProps>();
  const [frequencies, setFrequencies] = useState<FrequenciesProps[]>([]);
  const [selectedFrequencies, setSelectedFrequencies] = useState<FrequenciesProps>();
  const [locations, setLocations] = useState<LocationsProps[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<LocationsProps>();

  const [filteredbyLocation, setFilteredbyLocation] = useState<LocationsProps[]>([]);
  //const [filteredByFloor, setFilteredByFloor] = useState<FloorProps[]>([]);
  const [filteredByPrioritie, setFilteredByPrioritie] = useState<PrioritiesProps[]>([]);
  const [filteredByCategorie, setFilteredByCategorie] = useState<CategoriesProps[]>([]);
  const [filteredByFrequencie, setFilteredByFrequencie] = useState<FrequenciesProps[]>([]);

  function handleLocationSelected(location: any, floor: any, prioritie: any, categorie: any, frequencie: any) {
    setSelectedLocations(location);
    //setSelectedFloor(floor);
    setSelectedPriorities(prioritie);
    setSelectedCategories(categorie);
    setSelectedFrequencies(frequencie);

    //if(location == 'all') return setFilteredbyLocation(locations)

    const filTeredLocation = locations.filter(locations => locations.name.includes(location))
    //const filTeredFloor = floors.filter(floors => floors.name.includes(floor))
    const filTeredPrioritie = priorities.filter(priorities => priorities.name.includes(prioritie))
    const filTeredCategorie = categories.filter(categories => categories.name.includes(categorie))
    const filTeredFrequencie = frequencies.filter(frequencies => frequencies.name.includes(frequencie))

    setFilteredbyLocation(filTeredLocation);
    //setFilteredByFloor(filTeredFloor);
    setFilteredByPrioritie(filTeredPrioritie);
    setFilteredByCategorie(filTeredCategorie);
    setFilteredByFrequencie(filTeredFrequencie);
    closeModal;
  }

  /*
  const fetchFloors = async () => {
    try {
      const result = await api.get(`/floors`);
      setFloors(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };*/

  const fetchLocations = async () => {
    try {

      const result = await api.get(`/locations`);
      setLocations(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchPriorities = async () => {
    try {

      const result = await api.get(`/priorities`);
      setPriorities(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchFrequencies = async () => {
    try {

      const result = await api.get(`/frequencies`);
      setFrequencies(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  const fetchCategories = async () => {
    try {

      const result = await api.get(`/categories`);
      setCategories(result.data.content);
      //console.log(result.data.content)

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente mais tarde');
      console.log("DEU PAU NA MAQUINA", error)
    }
  };

  useEffect(() => {
    //fetchFloors();
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
            accessibilityLabel={'Prioridade'}
            title="Prioridade"
          />
          <ListDivider />

          <View style={styles.input}>
            <Picker
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
            accessibilityLabel={'Categoria'}
            title="Categoria"
          />
          <ListDivider />

          <View style={styles.input}>
            <Picker
              mode='dialog'
              selectedValue={selectedCategories}
              onValueChange={itemValue => setSelectedCategories(itemValue)}
            >
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

/*

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
*/