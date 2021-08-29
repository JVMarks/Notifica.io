import { List, Switch } from 'react-native-paper';
import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons, Ionicons, FontAwesome, Foundation } from '@expo/vector-icons';


import { Background } from '../../components/Background';
import { ListDividerControls } from '../../components/ListDividerControls';

export function Controls() {

  const [loading, setLoading] = useState(true);

  const [isChangeModeOn, setisChangeModeOn] = React.useState(false);
  const [isContrastOn, setisContrastOn] = React.useState(false);
  const [isTxTSizeOn, setisTxTSizeOn] = React.useState(false);
  const [isAppReadOn, setAppReadOn] = React.useState(false);

  const navigation = useNavigation();

  const onToggleSwitchConstras = () => setisContrastOn(!isContrastOn);
  const onToggleSwitchTxt = () => setisTxTSizeOn(!isTxTSizeOn);
  const onToggleSwitchRead = () => setAppReadOn(!isAppReadOn);
  const onToggleSwitchNightMode = () => setisChangeModeOn(!isChangeModeOn);

  function hadleFeedback() {
    navigation.navigate('Feedback');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        accessible={true}
        style={styles.container}
        enabled={Platform.OS === "ios" ? true : false}
        accessibilityLabel={'Tela criação de notificação'}
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
                  onPress={() => null}
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
              accessibilityLabel={'Precione para ter a seleção modo noturno'}
            >
              <List.Accordion
                title="Modo noturno"
                titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 13.5 }}
              >
                <List.Item
                  accessible={true}
                  accessibilityLabel={'Trocar tema'}
                  title="Trocar tema"
                  titleStyle={{ fontFamily: theme.fonts.title500, fontSize: 15 }}
                  right={props => <Switch  {...props} value={isChangeModeOn} onValueChange={onToggleSwitchNightMode} />} />
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