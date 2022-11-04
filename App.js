import React, { useState } from "react";
import Home from './screens/home'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    });
    setFontsLoaded(true);
  }

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return(
      <Home />
    )
  }
  getFonts();
  
  return(
    <Text>Loading...</Text>
  )
}

