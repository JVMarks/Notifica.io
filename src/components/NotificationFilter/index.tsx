import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Alert, ViewProps } from 'react-native';

import { styles } from './styles';
import { api } from '../../services/api';
import { filterBy } from '../../libs/filterby';
import { Picker } from '@react-native-picker/picker';

import { Button } from '../../components/Button';
import { FormTitle } from '../../components/FormTitle';
import { ListDivider } from '../../components/ListDivider';
import { NotificationProps } from '../../screens/NotificationList';

export type FloorProps = {
  id: number,
  name: string
}

export type LocationsProps = {
  id: number,
  name: string
}

export type PrioritiesProps = {
  id: number,
  name: string
}

export type FrequenciesProps = {
  id: number,
  name: string
}

export type CategoriesProps = {
  id: number,
  name: string
}

export function NotificationFilter() {

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

  const [filteredNotifica, setFilteredNotifica] = useState<NotificationProps[]>([]);

  async function hanlefilter() {
   const result = await filterBy(selectedFloor || 0, "", selectedPriorities || 0, selectedFrequencies || 0, selectedCategories || 0)
    setFilteredNotifica(result);
  }

  useEffect(() => {
    console.log("hanlefilter TESTE -->", filteredNotifica)
  }, [filteredNotifica])

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
              <Picker.Item label="Todos os Andares" value={0} key={0} />
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
              <Picker.Item label="Todos os locais" value={0} key={0} />
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
              <Picker.Item label="Todos as prioridades" value={0} key={0} />
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
              <Picker.Item label="Todos as frequencias" value={0} key={0} />
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
              <Picker.Item label="Todos as categorias" value={0} key={0} />
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
          onPress={hanlefilter}
        />
      </SafeAreaView>
    </View>
  );
}

/*
  useEffect(() => {
    filterBy(0, "Corredor", 0, 0, 0);

    console.log('UseEffect ', Firetednotification)
  }, [Firetednotification])

  useEffect(() => {
    console.log("selectedFloor -->", selectedFloor)
  }, [selectedFloor])

  useEffect(() => {
    console.log("selectedLocations -->", selectedLocations)
  }, [selectedLocations])

  useEffect(() => {
    console.log("selectedPriorities -->", selectedPriorities)
  }, [selectedPriorities])

  useEffect(() => {
    console.log("selectedFrequencies -->", selectedFrequencies)
  }, [selectedFrequencies])

  useEffect(() => {
    console.log("selectedCategories -->", selectedCategories)
  }, [selectedCategories])
  */