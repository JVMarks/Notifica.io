import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
<<<<<<< HEAD
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native';
=======
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { theme } from '../../global/styles/theme';
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { FormTitle } from '../../components/FormTitle';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { TextDropDown } from '../../components/TextDropDown';

export function CreateNotification() {

  const navigation = useNavigation();

<<<<<<< HEAD
=======
  const [floor, setFloor] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("");
  const [frequency, setFrequency] = useState("");
  const [category, setCategory] = useState("");
  const selectFloor = [
    {
      "label": "Térreo",
      "value": 1
    },
    {
      "label": "1º andar",
      "value": 2
    },
    {
      "label": "2º andar",
      "value": 3
    },
    {
      "label": "3º andar",
      "value": 4
    },
    {
      "label": "4º andar",
      "value": 5
    },
    {
      "label": "5º andar",
      "value": 6
    }    
  ]

>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
  function hadleNotificationList() {
    navigation.navigate('NotificationList');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
<<<<<<< HEAD
        style={styles.container}
        enabled={Platform.OS === "ios" ? true : false}
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
=======
        accessibilityLabel={'Tela criação de notificação'}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        style={styles.container}>

        <SafeAreaView
          accessible={true}
          accessibilityLabel={'Formulario para criação de notificação'}
          style={styles.formContainer}
        >
          <ScrollView style={{ marginBottom: 20 }}>

>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
            <FormTitle
              accessibilityLabel={'Localização'}
              title="Localização"
            />
            <ListDivider />
<<<<<<< HEAD
            <TextDropDown
              accessibilityLabel={'Escolha uma andar'}
              placeholder="Escolha uma andar"
            />

            <TextDropDown
              accessibilityLabel={'Escolha uma local'}
              placeholder="Escolha uma local"
=======

            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Escolha um andar',
                value: null,
              }}
              pickerProps={{
                accessibilityLabel: floor,
              }}
              onValueChange={(value) => setFloor(value)}
              items={selectFloor}
              style={{
                // inputIOS: {
                //   backgroundColor: '#FFF',
                //   fontSize: 16,
                //   color: '#FFF',
                //   borderRadius: 10,
                //   paddingHorizontal: 25,
                //   height: 38.5,
                //   borderRadius: 38.5,
                //   marginTop: 15
                // },
                inputAndroid: {
                  height: 39,
                  fontSize: 13,
                  marginTop: 7,
                  width: '100%',
                  borderWidth: 4,
                  marginBottom: 3,
                  borderRadius: 18,
                  textAlign: 'left',
                  paddingHorizontal: 15,
                  color: theme.colors.black,
                  fontFamily: theme.fonts.text400,
                  borderColor: theme.colors.bluelight,
                  backgroundColor: theme.colors.bluelight
                }
              }}
            />

            {/* <TextDropDown
              accessibilityLabel={'Escolha uma andar'}
              placeholder="Escolha uma andar"
            /> */}

            {/* <TextDropDown
              accessibilityLabel={'Escolha uma local'}
              placeholder="Escolha uma local"
            /> */}

            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Escolha um local',
                value: null,
                color: '#ccc'
              }}
              pickerProps={{
                accessibilityLabel: location,
              }}
              onValueChange={(value) => setFloor(value)}
              items={[
                {label: "Banheiro Masculino", value: 1},
                {label: "Banheiro Feminino", value: 2},
                {label: "Corredor", value: 3},
                {label: "Sala de reuniões", value: 4},
                {label: "Refeitório", value: 5}
              ]}
              style={{
                // inputIOS: {
                //   backgroundColor: '#FFF',
                //   fontSize: 16,
                //   color: '#FFF',
                //   borderRadius: 10,
                //   paddingHorizontal: 25,
                //   height: 38.5,
                //   borderRadius: 38.5,
                //   marginTop: 15
                // },
                inputAndroid: {
                  height: 39,
                  fontSize: 13,
                  marginTop: 7,
                  width: '100%',
                  borderWidth: 4,
                  marginBottom: 3,
                  borderRadius: 18,
                  textAlign: 'left',
                  paddingHorizontal: 15,
                  color: theme.colors.black,
                  fontFamily: theme.fonts.text400,
                  borderColor: theme.colors.bluelight,
                  backgroundColor: theme.colors.bluelight
                }
              }}
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
            />

            <FormTitle
              accessibilityLabel={'Prioridade'}
              title="Prioridade"
            />
<<<<<<< HEAD
            <ListDivider />
            <TextDropDown
              accessibilityLabel={'Escolha uma prioridade'}
              placeholder="Escolha uma prioridade"
=======

            <ListDivider />
            {/* <TextDropDown
              accessibilityLabel={'Escolha uma prioridade'}
              placeholder="Escolha uma prioridade"
            /> */}
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Escolha uma prioridade',
                value: null,
                color: '#ccc'
              }}
              pickerProps={{
                accessibilityLabel: priority,
              }}
              onValueChange={(value) => setPriority(value)}
              items={[
                { label: "Alta", value: 1 },
                { label: "Baixa", value: 2 }
              ]}
              style={{
                // inputIOS: {
                //   backgroundColor: '#FFF',
                //   fontSize: 16,
                //   color: '#FFF',
                //   borderRadius: 10,
                //   paddingHorizontal: 25,
                //   height: 38.5,
                //   borderRadius: 38.5,
                //   marginTop: 15
                // },
                inputAndroid: {
                  height: 39,
                  fontSize: 13,
                  marginTop: 7,
                  width: '100%',
                  borderWidth: 4,
                  marginBottom: 3,
                  borderRadius: 18,
                  textAlign: 'left',
                  paddingHorizontal: 15,
                  color: theme.colors.black,
                  fontFamily: theme.fonts.text400,
                  borderColor: theme.colors.bluelight,
                  backgroundColor: theme.colors.bluelight
                }
              }}
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
            />

            <FormTitle
              accessibilityLabel={'Frequência'}
              title="Frequência"
            />
            <ListDivider />
<<<<<<< HEAD
            <TextDropDown
              accessibilityLabel={'Escolha uma frequência'}
              placeholder="Escolha uma frequência"
=======
            {/* <TextDropDown
              accessibilityLabel={'Escolha uma frequência'}
              placeholder="Escolha uma frequência"
            /> */}

            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Escolha uma frequência',
                value: null,
                color: '#ccc'
              }}
              pickerProps={{
                accessibilityLabel: frequency,
              }}
              onValueChange={(value) => setFrequency(value)}
              items={[
                { label: "Recorrente", value: 1 },
                { label: "Raro", value: 2 }
              ]}
              style={{
                // inputIOS: {
                //   backgroundColor: '#FFF',
                //   fontSize: 16,
                //   color: '#FFF',
                //   borderRadius: 10,
                //   paddingHorizontal: 25,
                //   height: 38.5,
                //   borderRadius: 38.5,
                //   marginTop: 15
                // },
                inputAndroid: {
                  height: 39,
                  fontSize: 13,
                  marginTop: 7,
                  width: '100%',
                  borderWidth: 4,
                  marginBottom: 3,
                  borderRadius: 18,
                  textAlign: 'left',
                  paddingHorizontal: 15,
                  color: theme.colors.black,
                  fontFamily: theme.fonts.text400,
                  borderColor: theme.colors.bluelight,
                  backgroundColor: theme.colors.bluelight
                }
              }}
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
            />

            <FormTitle
              accessibilityLabel={'Categoria'}
              title="Categoria"
            />
            <ListDivider />
<<<<<<< HEAD
            <TextDropDown
              accessibilityLabel={'Escolha uma Categoria'}
              placeholder="Escolha uma Categoria"
=======
            {/* <TextDropDown
              accessibilityLabel={'Escolha uma Categoria'}
              placeholder="Escolha uma Categoria"
            /> */}
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Escolha uma categoria',
                value: null,
                color: '#ccc'
              }}
              pickerProps={{
                accessibilityLabel: category,
              }}
              onValueChange={(value) => setCategory(value)}
              items={[
                { label: "Acidente", value: 1 },
                { label: "Limpeza", value: 2 },
                { label: "Manutenção", value: 3 }
              ]}
              style={{
                // inputIOS: {
                //   backgroundColor: '#FFF',
                //   fontSize: 16,
                //   color: '#FFF',
                //   borderRadius: 10,
                //   paddingHorizontal: 25,
                //   height: 38.5,
                //   borderRadius: 38.5,
                //   marginTop: 15
                // },
                inputAndroid: {
                  height: 39,
                  fontSize: 13,
                  marginTop: 7,
                  width: '100%',
                  borderWidth: 4,
                  marginBottom: 3,
                  borderRadius: 18,
                  textAlign: 'left',
                  paddingHorizontal: 15,
                  color: theme.colors.black,
                  fontFamily: theme.fonts.text400,
                  borderColor: theme.colors.bluelight,
                  backgroundColor: theme.colors.bluelight
                }
              }}
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
            />

            <FormTitle
              accessibilityLabel={'Deixe uma menssagem'}
              title="Deixe uma menssagem"
            />
            <ListDivider />
            <Textarea
              accessibilityLabel={'Escolha uma menssagem'}
              placeholder="Escolha uma menssagem"
            />
<<<<<<< HEAD
            <View style={{ margin: 15 }} />
            <Button
              accessible={true}
              accessibilityLabel={'Pressione o botão para criar a notificação e navegar para a tela de lista de notifições'}
              title="Notificar"
              onPress={hadleNotificationList}
            />
          </ScrollView>
=======

          </ScrollView>
          <Button
            accessible={true}
            accessibilityLabel={'Pressione o botão para criar a notificação e navegar para a tela de lista de notifições'}
            title="Notificar"
            onPress={hadleNotificationList}
          />
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}