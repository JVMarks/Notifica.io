import React, { useContext, useState } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Speech from 'expo-speech';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomThemeContext from "../../context/BackgroundColor/index";

import { List, Switch } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons, Ionicons, FontAwesome, Foundation } from '@expo/vector-icons';

import { Load } from '../../components/Load';
import { Background } from '../../components/Background';
import { ListDividerControls } from '../../components/ListDividerControls';

export function Controls() {

  const navigation = useNavigation();
  //const [loading, setLoading] = useState(true);

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
    }

    setAppReadOn(!isAppReadOn);
  }

  //CONTRASTI
  const [isContrastOn, setisContrastOn] = React.useState(true);
  const { setState, state } = useContext(CustomThemeContext);
  const onToggleSwitchConstras = () => {

    if (!isContrastOn) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: '#225B9C'
      })

      /*
      let timer: NodeJS.Timeout;
      timer = setTimeout(<Load/>, 500);
     */
    } else if (isContrastOn) {
      setState({
        ...state,
        colorOne: "#112D4E",
        colorTwo: "#112D4E"
      })


    }
    setisContrastOn(!isContrastOn);
  }

  //TXT SIZE
  const [isTxTSizeOn, setisTxTSizeOn] = React.useState(false);
  const onToggleSwitchTxt = (dispatch: any) => {

    if (!isTxTSizeOn) {
      dispatch({ type: 'INCREASE_FONT_SIZE' })
    } else {
      dispatch({ type: 'DECREASE_FONT_SIZE' })
    }


    setisTxTSizeOn(!isTxTSizeOn);
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
        <SafeAreaView
          accessible={true}
          style={styles.controlsContainer}
          accessibilityLabel={'Tela de configurações'}
        >
          <ScrollView>

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
                  onPress={() => null}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Ionicons name='person-outline' size={24} />} />}
                />
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
                    accessibilityLabel={'Daltonismo nivel 1'}
                    title="Daltonismo nivel 1"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={isTxTSizeOn} onValueChange={onToggleSwitchTxt} />}
                  />
                  <List.Item
                    accessible={true}
                    accessibilityLabel={'Daltonismo nivel 2'}
                    title="Daltonismo nivel 2"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={isTxTSizeOn} onValueChange={onToggleSwitchTxt} />}
                  />
                  <List.Item
                    accessible={true}
                    accessibilityLabel={'Daltonismo nivel 3'}
                    title="Daltonismo nivel 3"
                    onPress={() => null}
                    titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                    left={props => <List.Icon {...props} icon={props => <Ionicons name='md-eye-sharp' size={24} />} />}
                    right={props => <Switch  {...props} value={isTxTSizeOn} onValueChange={onToggleSwitchTxt} />}
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
                  accessibilityLabel={'Texto maior'}
                  title="Texto maior"
                  onPress={() => null}
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  left={props => <List.Icon {...props} icon={props => <Ionicons name='md-text' size={24} />} />}
                  right={props => <Switch  {...props} value={isTxTSizeOn} onValueChange={onToggleSwitchTxt} />}
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
                  title="Versão 0.04V"
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15, opacity: 0.3 }}
                />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background >
  );
}