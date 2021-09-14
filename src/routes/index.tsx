import React from 'react';
import { AppRoutes } from './app.routes';
<<<<<<< HEAD
import GlobalContext from "../context/index";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

//PROVIDER
import {
  Provider as PaperProvier,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
=======
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f

/*
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
import { Onboarding } from '../screens/Onboarding';
<<<<<<< HEAD
theme={DarkTheme}
*/


export function Routes() {

  const [isChangeModeOn, setisChangeModeOn] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#fffff'
    }
  }

  const theme = isChangeModeOn ? CustomDarkTheme : CustomDefaultTheme;


  return (
    <PaperProvier theme={theme}>
      <NavigationContainer theme={theme}>

        <GlobalContext>
          <AppRoutes />
        </GlobalContext>

      </NavigationContainer>
    </PaperProvier>
=======
*/

export function Routes() {

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
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