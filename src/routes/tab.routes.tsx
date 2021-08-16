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
        tabBarInactiveTintColor: theme.colors.CreateAccont,
        tabBarActiveTintColor: theme.colors.line,
        //tabBarActiveBackgroundColor: theme.colors.line,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 65,

        }
      }}

    /*
    tabBarOptions={{
      activeTintColor: theme.colors.on,
      inactiveTintColor: theme.colors.on,
      labelPosition: 'beside-icon',
      cardStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 88
      },

    }}
    */
    >

      <AppTab.Screen
        name="Bem vindo"
        component={Home}
        options={{
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