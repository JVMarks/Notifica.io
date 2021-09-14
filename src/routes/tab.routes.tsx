import React from 'react';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Controls } from '../screens/Controls';
import { Feedback } from '../screens/Feedback';
import { NotificationList } from '../screens/NotificationList';
import { CreateNotification } from '../screens/CreateNotification';

import { theme } from '../global/styles/theme';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarAccessibilityLabel: 'Menu de navegação',
        tabBarInactiveTintColor: theme.colors.CreateAccont,
        tabBarActiveTintColor: theme.colors.line,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 65,

        },
      }}
      //backBehavior='none'
      //detachInactiveScreens={true}
    >

      <AppTab.Screen
        name="Bem vindo"
        component={Home}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name="Visualizar lista"
        component={NotificationList}
        options={{
          tabBarAccessibilityLabel: 'Visualizar lista de notificações',
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="list-alt"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name="Criar nova chamada"
        component={CreateNotification}
        options={{
          tabBarAccessibilityLabel: 'Criar nova chamada',
          tabBarIcon: (({ size, color }) => (
            <View style={{ backgroundColor: theme.colors.white, marginBottom: 47, borderRadius: 100 }}>
              <MaterialIcons
                name="add-circle"
                size={58}
                color={theme.colors.primary}
              />
            </View>
          )),
        }}
      />

      <AppTab.Screen
        name="Fale conosco"
        component={Feedback}
        options={{
          tabBarAccessibilityLabel: 'Fale conosco',
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="message"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name="Configuracões"
        component={Controls}
        options={{
          tabBarAccessibilityLabel: 'Menu de configurações',
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5
              name='toolbox'
              size={size}
              color={color}
            />
          ))

        }}
      />

    </AppTab.Navigator>
  )
}

export default AuthRoutes;