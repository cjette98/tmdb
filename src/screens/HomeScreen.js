import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GetMovieList } from '../service'

const HomeScreen = () => {
    React.useEffect(() => {
        GetMovieList('/3/movie/popular')
  .then(data => {
    console.log(data); 
    setMovieResponse()
  });
     
    },[])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})