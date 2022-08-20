import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import index from '../screens';

const Stack = createNativeStackNavigator();
const NavigationStack = () =>{
  return (
          
  <Stack.Navigator   
  screenOptions={() => ({
  headerShown: false,
})}>
    <Stack.Screen name="index" component={index} />
    {/* <Stack.Screen name="ScreenName" component={ScreenName} /> */}
  

</Stack.Navigator>

);}
    

export default NavigationStack;
