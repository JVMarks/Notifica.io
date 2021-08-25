import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { DATA } from '../../utils/NotificationEX';


export function Home() {

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  /*
  function handleAppointmentCreate() {
    navigation.navigate('');
  }
  */

  function hadleCreateNotification() {
    navigation.navigate('CreateNotification');
  }

  function hadleNotificationList() {
    navigation.navigate('NotificationList');
  }

  function hadleFeedback() {
    navigation.navigate('Feedback');
  }

  function hadleControls() {
    navigation.navigate('Controls');
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ marginTop: 40 }}>
            <View style={styles.perfil}>
              <Profile />
            </View>

            <View style={styles.countNotification}>
              <Text style={styles.countText}>
                {`${DATA.length} Novas notificações`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'pressione o botão para entrar na tela de criação de notificação'}
            style={styles.buttons}
            activeOpacity={0.6}
            onPress={hadleCreateNotification}
          >
            <Ionicons
              name='notifications-outline'
              size={54}
              color={theme.colors.CreateAccont2}
            />
            <Text style={styles.text}>
              Criar notificação
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'pressione o botão para entrar na tela de lista de notificação'}
            style={styles.buttons}
            activeOpacity={0.6}
            onPress={hadleNotificationList}
          >
            <MaterialIcons
              name="list-alt"
              size={54}
              color={theme.colors.CreateAccont2}
            />
            <Text style={styles.text}>
              Exibir notificações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'pressione o botão para entrar na tela de feedback'}
            style={styles.buttons}
            activeOpacity={0.6}
            onPress={hadleFeedback}
          >
            <MaterialIcons
              name="support-agent"
              size={54}
              color={theme.colors.CreateAccont2}
            />
            <Text style={styles.text}>
              Feedback’s
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'pressione o botão para entrar na tela de configurações'}
            style={styles.buttons}
            activeOpacity={0.6}
            onPress={hadleControls}
          >
            <FontAwesome5
              name='toolbox'
              size={54}
              color={theme.colors.CreateAccont2}
            />
            <Text style={styles.text}>
              Configurações
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Background >
  );
}