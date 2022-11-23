import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import ProfileButton from '../shared/profileButton'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <FontAwesomeIcon icon={faDumbbell} border size={24} color={'#007AFF'}/>
        <Text style={styles.text}>GymBro</Text>
      </View>
      {/* <ProfileButton style={styles.profile}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'row',
      // backgroundColor: 'grey',
      width: '100%',
      height: '100%'
    },
    title: {
      marginTop: 5,
      display: 'flex',
      flexDirection: 'row',
    },
    text: {
      fontFamily: 'nunito-bold',
      fontSize: 18,
      color: '#007AFF',
      marginLeft: 7,
    },
    profile: {
      alignItems: 'flex-end',
      marginLeft: 10
    }
})