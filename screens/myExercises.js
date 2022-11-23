import { View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'

export default function MyExercises() {

  const [favourites, setFavourites] = useState([]);


  return (
    <View>
      <Text>My exercises</Text>
    </View>
  )
}