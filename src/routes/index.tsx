import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
  Provider as PaperProvier,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { AppRoutes } from './app.routes';
import GlobalContext from "../context/index";

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
  )
}

/*
     <GlobalContext>
          {user.id ? <Onboarding /> : <AppRoutes />}
        </GlobalContext>

*/