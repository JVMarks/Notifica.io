import React, { useContext, useState, useEffect } from 'react';
import { Platform, KeyboardAvoidingView, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Speech from 'expo-speech';
import Constants from "expo-constants";
import Dialog from "react-native-dialog";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomThemeContext from "../../context/BackgroundColor/index";

import { List, Switch } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { api } from '../../services/api';
import { theme } from '../../global/styles/theme';
import { MaterialIcons, Ionicons, FontAwesome, Foundation } from '@expo/vector-icons';

import { Load } from '../../components/Load';
import { Background } from '../../components/Background';
import { SkipButton } from '../../components/SkipButton';
import { ListDividerControls } from '../../components/ListDividerControls';

export function Controls() {

  const navigation = useNavigation();
  //const [loading, setLoading] = useState(true);

  const version = Constants.manifest?.version

  const [userName, setUserName] = useState('');
  const [visible, setVisible] = useState(false);

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
    const name = JSON.parse(user || '').name;
    setUserName(name || '');
  }

  useEffect(() => {
    loadStorageUserName();
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  async function handleChangeName() {
    try {
      const user = await AsyncStorage.getItem('@d2a95sd84kp08r:users')
      const userID = JSON.parse(user || '').id;
      //const name = JSON.parse(user || '').name;

      if (!userName) {
        Alert.alert("Para mudar o nome você primeiro tem que dizer ele")
      } else {

        const changeName = {
            name: userName
        }

        api.put(`/users/${userID}`, changeName)
        setVisible(false);
      }
    } catch (error) {
      Alert.alert('Não foi possivel salvar seu nome👮‍♂️');
      console.log('Deu pau na maquina', error)
    }
  };

  //Image
  const [images, setImages] = useState<string[]>([]);
  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (result.cancelled) {
      return;
    }
    const { uri: image } = result;
    setImages([...images, image]);

    /*
      images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    */
  }

  //READ
  const [isAppReadOn, setAppReadOn] = React.useState(false);
  const onToggleSwitchRead = () => {
    if (!isAppReadOn) {
      const txtSpeak = 'Olá, seja bem vindo, seu assistente pessoal está em fase beta. Em breve ele estará pronto para te ajudar.'
      Speech.speak(txtSpeak, {
        language: 'pt-br',
        pitch: 0.93,
        rate: 0.93
      });
    } else {
      Speech.stop()
    }

    setAppReadOn(!isAppReadOn);
  }

  //CONTRASTI
  const [isContrastOn, setisContrastOn] = React.useState(false);
  const { setState, state } = useContext(CustomThemeContext);

  const [nivelOne, setNivelOne] = React.useState(false);
  const [nivelTwo, setNivelTwo] = React.useState(false);
  const [nivelThree, setNivelThree] = React.useState(false);

  const onToggleSwitchConstras = () => {

    if (!isContrastOn) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: '#225B9C'
      })

      setNivelOne(false);
      setNivelTwo(false);
      setNivelThree(false);
    } else if (isContrastOn) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: "#112D4E"
      })


    }
    setisContrastOn(!isContrastOn);
  }

  const onToggleSwitchNivelOne = () => {

    if (!nivelOne) {
      setState({
        ...state,
        colorOne: "#111d4e",
        colorTwo: "#22419c"
      })

      setNivelTwo(false);
      setNivelThree(false);
      setisContrastOn(false);
    } else if (nivelOne) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: "#112D4E"
      })


    }
    setNivelOne(!nivelOne);
  }

  const onToggleSwitchNivelTwo = () => {

    if (!nivelTwo) {
      setState({
        ...state,
        colorOne: "#4e1144",
        colorTwo: "#80229c"
      })

      setNivelOne(false);
      setNivelThree(false);
      setisContrastOn(false);
    } else if (nivelTwo) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: "#112D4E"
      })


    }
    setNivelTwo(!nivelTwo);
  }

  const onToggleSwitchNivelThree = () => {

    if (!nivelThree) {
      setState({
        ...state,
        colorOne: "#4e1123",
        colorTwo: "#9c2259"
      })

      setNivelOne(false);
      setNivelTwo(false);
      setisContrastOn(false);
    } else if (nivelThree) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: "#112D4E"
      })
    }
    setNivelThree(!nivelThree);
  }

  function hadleFeedback() {
    navigation.navigate('Feedback');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        accessibilityLabel={'Tela de configurações'}
        enabled={Platform.OS === "ios" ? true : false}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      >

        <SkipButton />

        <SafeAreaView
          accessible={true}
          style={styles.controlsContainer}
          accessibilityLabel={'Tela de configurações'}
        >
          <ScrollView
           style={{ marginBottom: '25%'}}
          >

            <List.Section
              accessible={true}
              accessibilityLabel={'Precione para ter a seleção de perfil'}
            >
              <List.Accordion
                title="Perfil"
                titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 13.5 }}
              >
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Editar nome'}
                  title="Editar nome"
                  onPress={showDialog}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Ionicons name='person-outline' size={24} />} />}
                />
                <Dialog.Container visible={visible}>
                  <Dialog.Title>Você quer mesmo trocar o nome?</Dialog.Title>
                  <Dialog.Description>
                    Seus colegas de trabalho irão ver seu nome, evite palavras pejorativas😉!
                  </Dialog.Description>
                  <Dialog.Input value={userName} onChangeText={userName => setUserName(userName)} />
                  <Dialog.Button label="Cancelar" onPress={handleCancel} />
                  <Dialog.Button label="Mudar nome" onPress={handleChangeName} />
                </Dialog.Container>
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Trocar foto de perfil'}
                  onPress={handleSelectImages}
                  title="Trocar foto de perfil"
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <MaterialIcons name='add-a-photo' size={24} />} />}
                />
              </List.Accordion>
            </List.Section>

            <ListDividerControls />

            <List.Section
              accessible={true}
              accessibilityLabel={'Precione para ter a seleção de acessibilidade'}
            >
              <List.Accordion
                title="Acessibilidade"
                titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 13.5 }}
              >

                <List.Accordion
                  title="Daltonismo"
                  onPress={() => null}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}

                >
                  <List.Item
                    accessible={true}
                    accessibilityLabel={'Daltonismo Protanopia'}
                    title="Daltonismo Protanopia"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={nivelOne} onValueChange={onToggleSwitchNivelOne} />}
                  />
                  <List.Item
                    accessible={true}
                    accessibilityLabel={'Daltonismo Deuteranopia'}
                    title="Daltonismo Deuteranopia"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={nivelTwo} onValueChange={onToggleSwitchNivelTwo} />}
                  />
                  <List.Item
                    accessible={true}
                    accessibilityLabel={'Daltonismo Tritanopia'}
                    title="Daltonismo Tritanopia"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={nivelThree} onValueChange={onToggleSwitchNivelThree} />}
                  />
                </List.Accordion>

                <List.Item
                  accessible={true}
                  accessibilityLabel={'Contraste +'}
                  title="Contraste +"
                  onPress={() => null}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Foundation name="contrast" size={24} />} />}
                  right={props => <Switch  {...props} value={isContrastOn} onValueChange={onToggleSwitchConstras} />}
                />
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Ler a pagina'}
                  title="Ler a pagina"
                  onPress={() => null}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Ionicons name='md-chatbox-ellipses-outline' size={24} />} />}
                  right={props => <Switch  {...props} value={isAppReadOn} onValueChange={onToggleSwitchRead} />}
                />
              </List.Accordion>
            </List.Section>

            <ListDividerControls />

            <List.Section
              accessible={true}
              accessibilityLabel={'Precione para ter a seleção de problemas com o app?'}
            >
              <List.Accordion
                title="Problemas com o app?"
                titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 13.5 }}
              >
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Precione para ir em fale com a gente'}
                  onPress={hadleFeedback}
                  title="Fale com a gente"
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <FontAwesome name='support' size={24} />} />}
                />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </SafeAreaView>

            <View style={styles.versioncontainer}>
              <Text style={styles.version}>
                {`Versão ${version}`}
              </Text>
            </View>
      </KeyboardAvoidingView>
    </Background >
  );
}

/*


            <ListDividerControls />

            <List.Section
              accessible={true}
              accessibilityLabel={'Precione para ver a versão do app'}
            >
              <List.Accordion
                title="Versão Notifica.io"
                titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 13.5 }}
              >
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Versão 0.04V'}
                  onPress={() => null}
                  title={`Versão ${version}`}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15, opacity: 0.3 }}
                />
              </List.Accordion>
            </List.Section>

*/