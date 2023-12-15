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

import React, { useState, useEffect } from 'react';

import GoalItem from './GoalItem.js';

import RNFS from 'react-native-fs';

const SectionFlatList = ({isVisible, onClose}) => {

    const [goals, setGoals] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
      const readFromFile = async () => {
        try {
          const path = RNFS.DocumentDirectoryPath + '/savedGoals.json';
          const exists = await RNFS.exists(path);
  
          if (exists) {
            const savedData = await RNFS.readFile(path, 'utf8');
            const parsedData = JSON.parse(savedData);
            setGoals(parsedData);
          } else {
            console.log('File does not exist.');
          }
        } catch (error) {
          console.error('Error reading file:', error);
        }
      };
  
      readFromFile();
    }, []);

    const writeToFile = async (data) => {
    try {
      const path = RNFS.DocumentDirectoryPath + '/savedGoals.json';
      await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
      console.log('File written successfully!');
    } catch (error) {
      console.error('Error writing to file:', error);
    }
    };

    const addNewItem = (newGoal) => {
      if (newGoal && typeof newGoal === 'string' && newGoal.trim() !== '') {
        const newItem = { key: String(goals.length + 1), value: newGoal.trim() };
        const updatedGoals = [...goals, newItem];
  
        setGoals(updatedGoals);
        writeToFile(updatedGoals);
  
        setInputText('');
      }
    };
  
    const deleteItem = (goal) => {
      setGoals((currentGoals) => {
        const updatedGoals = currentGoals.filter((item) => item.key !== goal.key);
  
        // Save the updated goals to a file
        setGoals(updatedGoals);
        writeToFile(updatedGoals);
  
        return updatedGoals;
      });
    };

    const renderItem = async ({item}) => (
      
      <TouchableOpacity onPress={() => deleteItem(item)} 
      style={({pressed}) => pressed && styles.itemPressed}>

        <GoalItem item={item}></GoalItem>

      </TouchableOpacity>

    );
  
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