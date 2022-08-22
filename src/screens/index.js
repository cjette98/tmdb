import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { postGetMovieDetails } from '../service'

const Index = () => {

    const [getMovieResponse, setMovieResponse] = React.useState([])

    React.useEffect(() => {
        postGetMovieDetails('/3/movie/550')
  .then(data => {
    console.log(data); 
    setMovieResponse()
  });
     
    },[])


  return (
    <View style={styles.main}>
      <Text>HOME</Text>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
    
})