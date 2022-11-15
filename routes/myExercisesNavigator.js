import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseDetails from "../screens/exerciseDetails";
import MyExercises from "../screens/myExercises";

export default function MyExercisesNavigator() {
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
        name="MyExercises"
        component={MyExercises}
        options={{
            headerTitle: 'My Exercises'
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