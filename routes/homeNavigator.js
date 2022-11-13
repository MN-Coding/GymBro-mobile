import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseDetails from "../screens/exerciseDetails";
import Home from "../screens/home";

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator
        screenOptions={{
        headerStyle: {
            backgroundColor: 'white',
            height: 60,
        },
        headerTintColor: '#444',
        headerBackTitle: ''
        }}>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
            headerTitle: 'Find the Right Exercise'
        }}/>
        <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetails}
        options={{
            headerTitle: 'Exercise Details'
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}