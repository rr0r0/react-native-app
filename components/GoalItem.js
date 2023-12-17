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
    borderBottomColor: '#bdbdbd',
    borderRadius: 6,
    textAlign:'center',
    verticalAlign: 'middle',
    color: '#000000',
    padding: 10,
  }

});