import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NavigationStack from './src/navigation/NavigationStacks';


const App = () => {
  return (
    <NavigationContainer>


      <NavigationStack />
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});