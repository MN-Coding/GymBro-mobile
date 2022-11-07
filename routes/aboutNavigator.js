import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about'

export default function AboutNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator
        screenOptions={{
        headerStyle: {
            backgroundColor: 'lightgrey',
            height: 60
        },
        headerShown: false,
        headerTintColor: '#444',
        headerBackTitle: ''
        }}>
        <Stack.Screen
        name="About"
        component={About}
        options={{
            headerTitle: 'About'
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}