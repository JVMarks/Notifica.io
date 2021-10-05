import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import { useFonts } from 'expo-font';
import { Jost_400Regular, Jost_500Medium, Jost_600SemiBold, Jost_700Bold } from '@expo-google-fonts/jost';

LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
  'Stack Navigator: headerMode="none" is deprecated. Use headerShown: false in screenOptions instead.',
  'Warning: Failed prop type: Invalid props.style key `resizeMode` supplied to `LottieView`.']);

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';

/*Providers*/
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold
  })

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

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
   <AuthProvider>
          <Routes />
        </AuthProvider>
*/
