import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.main}>
      <Text>Well PLayed</Text>
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