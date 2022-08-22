import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GetMovieList, getGenre } from '../service'

const HomeScreen = () => {
    const [getGenreMovie, setgetGenreMovie] = React.useState([])
    const [getMovie, setgetMovie] = React.useState([])
    React.useEffect(() => {
        GetMovieList('/3/movie/popular')
  .then(data => {
    console.log(data); 
    setgetMovie(data.results)
  });
     
  getGenre('/3/genre/movie/list')
  .then(item => {
    console.log(item); 
    setgetGenreMovie(item.genres)
  });
  
    },[])

   

  return (
    <View style={styles.box}>
      <Text>{getMovie.map((item,i) => {
        return(
            <View key={i}>
                <Text style={styles.movie}>{item.title}</Text>

            </View>
        )
      })}</Text>

    <Text>{getGenreMovie.map((item,i) => {
        return(
            <View key={i}>
                <Text style={styles.genre}>{item.name}</Text>

            </View>
        )
      })}</Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    box:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        
    },
    movie:{
        
    }
})