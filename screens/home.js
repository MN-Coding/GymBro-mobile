import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { response } from '../response'
import SearchBar from 'react-native-dynamic-search-bar'

const SHOWN = 10;

export default function Home({navigation}) {

  //const shownExercises = response.slice(0, SHOWN);
  const shownExercises = response;

  const [reviews, setReviews] = useState(shownExercises);  

  const handleSearch = (text) => {
    let filter = text.toLowerCase();
    const regex = new RegExp(`${filter}`);
    const newReviews = shownExercises.filter((item) => regex.test(item.name));
    setReviews(newReviews);
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <SearchBar 
      onChangeText={(text) => handleSearch(text)}
      onClearPress={()=> setReviews(shownExercises)}
      style={styles.searchbar}/>
      <FlatList 
      data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigation.navigate('ExerciseDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 10,
    marginBottom: 10
  }
})