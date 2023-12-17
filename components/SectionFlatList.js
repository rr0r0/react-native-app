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
import AppButton from './AppButton.js'

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
      console.log(path)
      await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
      console.log('File written successfully!');
    } catch (error) {
      console.error('Error writing to file:', error);
    }
    };

    const addNewItem = (newGoal) => {
      if (newGoal && typeof newGoal === 'string' && newGoal.trim() !== '') {
        const newItem = { key: String(goals.length + 1), value: newGoal.trim() };
        
        setGoals((currentGoals) => {
          try {
            const updatedGoals = Array.isArray(currentGoals) ? [...currentGoals, newItem] : [newItem];
            writeToFile(updatedGoals);
            setInputText('');
            return updatedGoals;
          } catch (error) {
            console.error('Error in setGoals:', error);
            return currentGoals; // Return the current state in case of an error
          }
        });
      }
    };
  
    const deleteItem = (goal) => {
      setGoals((currentGoals) => {
        const updatedGoals = currentGoals.filter((item) => item.key !== goal.key);
        writeToFile(updatedGoals);
        return [...updatedGoals];
      });
    };

    const renderItem = ({item}) => {
      const { key, value } = item;
      
      return  (<TouchableOpacity onPress={() => deleteItem(item)} >

        <GoalItem item={item}></GoalItem>

      </TouchableOpacity>);
    }; 
  
    return (
      <Modal visible={isVisible} onBackdropPress={onClose} animationType='slide'>
        <View style={styles.section}>
          <Text style={styles.title2}>Goals</Text>
          <View style={styles.sectionB}>
            <AppButton text={'Add'} functionOnPress={() => addNewItem(inputText)}>
              </AppButton>
            <AppButton text={'Cancel'} functionOnPress={onClose}>
              </AppButton>
          </View>
          <TextInput
              placeholder="Enter goal"
              value={inputText}
              onChangeText={(text) => setInputText(text)}
              style={styles.textInput}
            />
          
          <FlatList
              data={goals}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
        </View>
      </Modal>
    );
  };

export default SectionFlatList;

const styles = StyleSheet.create({

  section: {
    flexDirection: 'collumn',
    padding: 10,
  },

  sectionB: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,

  },

  title2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginTop: 8,
    marginBottom: 8,
  },

  textInput: {
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingBottom: 10,
  }

});