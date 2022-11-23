import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

export default function ProfileButton(props) {

  const handleProfileClick = () => {
    console.log('profile button clicked')
  }

  return (
    <View style={props.style}>
      <TouchableOpacity onPress={()=> handleProfileClick()}>
      <View>
      <FontAwesomeIcon icon={faUserCircle} border size={24} color={'#007AFF'}/>
      </View>
      </TouchableOpacity>
    </View>
  )
}
