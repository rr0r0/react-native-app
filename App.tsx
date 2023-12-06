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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [inputT, setInputT] = useState('');
  const [goals, setGoals] = useState<{goal: string}[]>([]);

  function addGoal() {
    if (inputT !== ""){
      setGoals([
        ...goals,
        {goal: inputT},
      ])
    }
    /* goals.forEach((e,i)=>{console.log(e,i)}) */
  };

  function handleKeyDown(event: any) {
    console.log((event.key !== true),event.key)
    if (event.key === 'Enter') {
      if (inputT !== "") return;
        addGoal();
    }
  };

  function handleText(text:string) {
    setInputT(text)
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      
      <StatusBar
        backgroundColor="#61dafb"
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: 24
          }}>

          <Text style={styles.title}>Agenda</Text>
          <View style={styles.section}>

            <Button 
            title="clear"/>

            <TextInput
            placeholder="Text..." 
            style={styles.textInput} 
            onChangeText={handleText}
            multiline={true} 
            onKeyPress={handleKeyDown}></TextInput>

            <Button 
            title="add" 
            onPress={addGoal} />

          </View>

          <View
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
            
          })}</View>

        </View>
      </ScrollView>
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
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    flex: 1,
    padding: 5,
    margin: 5,
    textAlign:'center',
    verticalAlign: 'middle',
  }
});

export default App;

