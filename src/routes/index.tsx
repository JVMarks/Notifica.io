import React from 'react';
import { AppRoutes } from './app.routes';
import { NavigationContainer } from '@react-navigation/native';

/*
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
import { Onboarding } from '../screens/Onboarding';
*/

export function Routes() {

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}

/*
export function Routes(){
  const { user } = useAuth();

  return(
    <NavigationContainer>
     { user.id ? <AppRoutes /> : <SignIn /> }
    </NavigationContainer>
  )
}
*/