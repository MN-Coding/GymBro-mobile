import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function Home() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </SafeAreaView>
  )
}