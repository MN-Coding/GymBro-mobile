import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({navigation, route}) {
  return (
    <SafeAreaView styles={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
      </Card>
    </SafeAreaView>
  )
}