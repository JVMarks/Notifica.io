import React from 'react';
import AuthRoutes from './tab.routes';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Onboarding } from '../screens/Onboarding';
import { CreateAccount } from '../screens/CreateAccount';
import { CreateNotification } from '../screens/CreateNotification';
import { NotificationList } from '../screens/NotificationList';
import { Controls } from '../screens/Controls';
import { Feedback } from '../screens/Feedback';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      //headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.CreateAccont
        }
      }}
    >

      <Screen
        name="Onboarding"
        component={Onboarding}
      />

      <Screen
        name="CreateAccount"
        component={CreateAccount}
      />

      <Screen
        name="SignIn"
        component={SignIn}
      />

      <Screen
        name="Home"
        component={AuthRoutes}
      />

      <Screen
        name="CreateNotification"
        component={CreateNotification}
      />

      <Screen
        name="NotificationList"
        component={NotificationList}
      />

      <Screen
        name="Controls"
        component={Controls}
      />

      <Screen
        name="Feedback"
        component={Feedback}
      />


    </Navigator>
  )
}