import React, { useState, useCallback, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from './routes/homeNavigator';
import AboutNavigator from './routes/aboutNavigator'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

// SplashScreen.preventAutoHideAsync();

export default function App() {

  console.log(faDumbbell);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: 'Gym Bro'
      }}>
      <Drawer.Screen name="Home" component={HomeNavigator}/>
      <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}