/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

/* ----- REFERENCE -----
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
  ----- ----- ----- ----- */

interface goal {
  key: string;
  value: string;
}

const SectionFlatList = () => {
  const [goals, setGoals] = useState<goal[]>([]);
  const [inputText, setInputText] = useState('');

  const renderItem = ({ item }:{item:goal}) => (
    <View style={styles.goal}>
      <Text>{item.value}</Text>
    </View>
  );

  const addNewItem = () => {
    if (inputText.trim() !== '') {
      const newGoal= { key: String(goals.length + 1), value: inputText };
      setGoals([...goals, newGoal]);
      setInputText(''); // Clear the input field after adding an item
    }
  };

  /* function handleText(text:string) {
    setInputext(text)
  }; */

  return (
    <>
    <View style={styles.section}>
      <TextInput
        placeholder="Enter item"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Add Item" onPress={addNewItem} /> 
    </View>
    
    <FlatList
        data={goals}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </>
  );
};



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
        
        <SectionFlatList/>
        {/* <View
        style={styles.sectionContainer}>
          <Text
          style={styles.sectionTitle}>
              Reminders
          </Text>
          {goals.map((e,i) => {
          if (e.goal !== ""){return (
            
            <Text 
              key={i} 
              style={styles.goal}>
                {e.goal + '\n'}
            </Text>
          )}
            
        })}</View> */}

        
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
  goal: {
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
    borderRadius: 6,
    textAlign:'center',
    verticalAlign: 'middle',
    flex: 2
  }
});

export default App;

