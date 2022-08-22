import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen';
import index from '../screens';

const Stack = createNativeStackNavigator();
const NavigationStack = () =>{
  return (
          
  <Stack.Navigator   
  screenOptions={() => ({
  headerShown: false,
})}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="index" component={index} />
    
  

</Stack.Navigator>

);}
    

export default NavigationStack;
