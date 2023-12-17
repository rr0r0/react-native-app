import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

  const AppButton = ({text, functionOnPress}) => {
  
    return (
        <>
        <TouchableOpacity style={styles.button} onPress={functionOnPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        </>
    );
  };

export default AppButton;

const styles = StyleSheet.create({
    button:  {
        backgroundColor: '#61dafb',
        minHeight: 30,
        flex: 1,
        borderColor: '#0a1e32',
        borderWidth: 2,
    },
    
    text: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '500',
    }
});
