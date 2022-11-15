import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton(props) {

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={()=> props.onPress()}>
      <View style={styles.cardContent}>
      <Text style={styles.text}>{props.title}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3, 
        backgroundColor: '#007AFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 6
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
      alignItems: 'center'
    },
    text: {
        fontFamily: 'nunito-bold',
        color: 'white',
        fontSize: 17
    }
})