import React from 'react';
import AuthRoutes from './tab.routes';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Feedback } from '../screens/Feedback';
import { Controls } from '../screens/Controls';
import { Onboarding } from '../screens/Onboarding';
import { Confirmation } from '../screens/Confirmation';
import { CreateAccount } from '../screens/CreateAccount';
import { NotificationList } from '../screens/NotificationList';
import { CreateNotification } from '../screens/CreateNotification';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
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
        name="Confirmation"
        component={Confirmation}
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