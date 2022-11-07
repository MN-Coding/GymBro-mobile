import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from "../screens/reviewDetails";
import Home from "../screens/home";

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator
        screenOptions={{
        headerStyle: {
            backgroundColor: 'lightgrey',
            height: 60,
        },
        headerTintColor: '#444',
        headerBackTitle: ''
        }}>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
            headerTitle: 'GameZone'
        }}/>
        <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
            headerTitle: 'Review Details'
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}