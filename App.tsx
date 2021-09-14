import React from 'react';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { StatusBar, LogBox } from 'react-native';

<<<<<<< HEAD
/*Providers*/
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

=======
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold
} from '@expo-google-fonts/jost';

import { Background } from './src/components/Background';

LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
  'Stack Navigator: headerMode="none" is deprecated. Use headerShown: false in screenOptions instead.',
  'Warning: Failed prop type: Invalid props.style key `resizeMode` supplied to `LottieView`.']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

<<<<<<< HEAD
  //SIZE
  const reducer = (state = 12, action: any) => {
    switch (action.type) {
      case 'INCREASE_FONT_SIZE':
        return state !== 28 ? state + 4 : state
      case 'DECREASE_FONT_SIZE':
        return state !== 12 ? state - 4 : state
      default:
        return state
    }
  }

  const store = createStore(reducer)

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </Background>
  );
}

/*
import { StatusBar, LogBox, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';


const deviceTheme = useColorScheme();
const themes = theme[deviceTheme] || theme.dark_mode;

<ThemeProvider theme={themes}>

</ThemeProvider>

*/
=======

  return (
    <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
    </Background>
  );
}
>>>>>>> 5179e4895ccd4946f6023f89a381c87da657779f
