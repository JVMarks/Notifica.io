import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

console.disableYellowBox = true;
LogBox.ignoreLogs([
'You are not currently signed in to Expo on your development machine.',
'Stack Navigator: headerMode="none" is deprecated. Use headerShown: false in screenOptions instead.', 
'Warning: Failed prop type: Invalid props.style key `resizeMode` supplied to `LottieView`.' ]);

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