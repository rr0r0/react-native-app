import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, { useState } from 'react';

import GoalItem from './GoalItem.js';


const SectionFlatList = ({isVisible, onClose}) => {


    const [goals, setGoals] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const renderItem = ({item}) => (
      
      <TouchableOpacity onPress={() => deleteItem(item)} 
      style={({pressed}) => pressed && styles.itemPressed}>

        <GoalItem item={item}></GoalItem>

      </TouchableOpacity>

    );
  
    const addNewItem = (goals, newGoal) => {
      if (newGoal.trim() !== '') {
        const newItem= { key: String(goals.length + 1), value: newGoal};
        setGoals([...goals, newItem]);
        setInputText(''); // Clear the input field after adding an item
      }
    };

    const deleteItem = (goal) => {
      setGoals(goals =>{
        return goals.filter( (item) => item.key !== goal.key)
      });
    };
  
    return (
      <Modal visible={isVisible} onBackdropPress={onClose} animationType='slide'>
        <Text>Goals</Text>
        <View style={styles.section}>
          <Button title="Add" onPress={() => addNewItem(goals, inputText)} />
          <Button title="Cancel" onPress={onClose} /> 
        </View>
        <TextInput
            placeholder="Enter goal"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        
        <FlatList
            data={goals}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
      </Modal>
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
  },
  itemPressed:  {
    color: '#a2c4fa'
  }

});