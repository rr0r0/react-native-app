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

        <Text style={styles.title}>Agenda</Text>
        
        <GoalListComponent/>
        
      </View>
    </SafeAreaView>
  
  );}

const styles = StyleSheet.create({

  sectionContainer: {
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'grey'
  },

  sectionDescription: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    padding: 5,
  },

  highlight: {
    fontWeight: '700',
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    padding: 5,
    width: '60%',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginTop: 8,
    marginBottom: 8,
  },
  
});

export default App;