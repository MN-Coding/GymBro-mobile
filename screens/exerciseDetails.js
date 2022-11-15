import { View, Text, StyleSheet, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'
import {Rating} from 'react-native-ratings'
import CustomButton from '../shared/customButton'
import SQLite from 'react-native-sqlite-storage'

export default function ExerciseDetails({navigation, route}) {

  const imgSrc = route.params.gifUrl;
  const title = route.params.name.toUpperCase();
  const bodyPart = route.params.bodyPart.toUpperCase();
  const targetBodyPart = route.params.target.toUpperCase();
  const equipment = route.params.equipment.toUpperCase();

  const handleProgressButton = () => {
    console.log('pressed')
  }

  // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS "
  //       +"Exercises "
  //       +"()"
  //     )
  //   })
  // }

  return (
    <SafeAreaView styles={globalStyles.container}>
      <Card>
        <Text style={styles.titleText}>{title}</Text>
        <Image
        style={styles.image}
        source={{
          uri: imgSrc
        }}
        />
        <View style={styles.info}>
        <Text style={styles.bodyText}>Body Part: </Text>
        <Text style={styles.bodyTextInfo}>{bodyPart}</Text>
        </View>
        <View style={styles.info}>
        <Text style={styles.bodyText}>Target Muscle Group: </Text>
        <Text style={styles.bodyTextInfo}>{targetBodyPart}</Text>
        </View>
        <View style={styles.info}>
        <Text style={styles.bodyText}>Equipment: </Text>
        <Text style={styles.bodyTextInfo}>{equipment}</Text>
        </View>
      </Card>
      <CustomButton title='See My Progress' onPress={handleProgressButton}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'left',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    alignSelf: 'center'
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 24,
    color: '#333',
    alignSelf: 'center'
  },
  info: {
    marginTop: 8,
    flexDirection: 'row'
  },
  bodyText: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
    color: '#333',
  },
  bodyTextInfo: {
    fontFamily: 'nunito-bold',
    fontSize: 16,
    color: '#333',
  }
})