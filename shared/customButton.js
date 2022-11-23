import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar as hollow } from '@fortawesome/free-regular-svg-icons'
import { faStar as solid } from '@fortawesome/free-solid-svg-icons'

export default function CustomButton(props) {

  if (props.favourite) {
    let displayIcon = props.favourite == 1 ? hollow : solid;
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={()=> props.onPress()}>
        <View style={styles.cardContent}>
          <Text style={styles.text}>{props.title}</Text>
          <FontAwesomeIcon icon={displayIcon} border size={24} color={'white'}/>
        </View>
        </TouchableOpacity>
      </View>
    )
  }

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
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
        fontFamily: 'nunito-bold',
        color: 'white',
        fontSize: 17
    }
})