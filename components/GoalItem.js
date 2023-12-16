import {
    StyleSheet,
    Text,
  } from 'react-native';

  const GoalItem = ({item}) => {
  
    return (
        <>
          
          <Text style={styles.goal}>{item.value}</Text>

        </>
    );
  };

export default GoalItem;

const styles = StyleSheet.create({

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