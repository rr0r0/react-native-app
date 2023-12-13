import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, { useState } from 'react';

import GoalItem from './GoalItem.js';


const SectionFlatList = () => {

    const [goals, setGoals] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const renderItem = ({item}) => (
      <Text style={styles.goal}>{item.value}</Text>
    );
  
    const addNewItem = (goals, newGoal) => {
      if (newGoal.trim() !== '') {
        const newItem= { key: String(goals.length + 1), value: newGoal};
        setGoals([...goals, newItem]);
        setInputText(''); // Clear the input field after adding an item
      }
    };
  
    return (
      <>
      <View style={styles.section}>
        <TextInput
          placeholder="Enter goal"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title="Add" onPress={() => addNewItem(goals, inputText)} /> 
      </View>
      
      <FlatList
          data={goals}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </>
    );
  };

export default SectionFlatList;

const styles = StyleSheet.create({
  
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  goal: {
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
    borderRadius: 6,
    textAlign:'center',
    verticalAlign: 'middle',
    color: '#000000'
  }

});