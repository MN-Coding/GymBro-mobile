import React, { useState, useCallback, useEffect} from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from './routes/homeNavigator';
import AboutNavigator from './routes/aboutNavigator'
import MyExercisesNavigator from './routes/myExercisesNavigator'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from './screens/header'
import * as SQLite from 'expo-sqlite';
import { response } from './response'

// SplashScreen.preventAutoHideAsync();

const openDatabase = () => {
  const db = SQLite.openDatabase("exercises.db");
  return db;
}

const db = openDatabase();

export default function App() {

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

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists exercises (bodyPart text, equipment text, gifUrl text, id text primary key, name text, target text, favourite integer);"
      );
    });
  }, []);

  response.forEach((exercise) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into exercises (bodyPart, equipment, gifUrl, id, name, target, favourite) values (?, ?, ?, ?, ?, ?, false)",
        exercise.bodyPart, exercise.equipment, exercise.gifUrl, exercise.id, exercise.name, exercise.target, false
      )
    }, null);
  })

  // continue here and test select query
  console.log('hello');
  db.transaction((tx) => {
    tx.executeSql(
      "select * from exercises where name = ankle circles",
    )
  },
  null,
  (transaction, resultSet) => console.log(resultSet),
  (err) => console.log(err));
  console.log('hello2');

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
        headerTitle: (props) => <Header {...props} />
      }}>
      <Drawer.Screen name="Home" component={HomeNavigator}/>
      <Drawer.Screen name="My Exercises" component={MyExercisesNavigator}/>
      <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}