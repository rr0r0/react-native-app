/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import GoalListComponent from './components/GoalListComponent.js';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      
      <StatusBar
        backgroundColor="#61dafb"
      />

      <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: 24
          }}>

        <Text style={styles.title1}>Agenda</Text>
        
        <GoalListComponent/>
        
      </View>
    </SafeAreaView>
  
  );}

const styles = StyleSheet.create({
  
  title1: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginTop: 8,
    marginBottom: 8,
  },
  
});

export default App;