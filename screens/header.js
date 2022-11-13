import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <View style={styles.header}>
        <FontAwesomeIcon icon={faDumbbell} border size={24} color={'#007AFF'}/>
        <Text style={styles.text}>Gym Bro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 7
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#007AFF',
        marginLeft: 7
    }
})