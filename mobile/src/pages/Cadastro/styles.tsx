import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    container:{
        flex:1,
       alignItems: 'center',
        justifyContent: 'center',
        
    },

    logo:{
        
    },

    title: {
       marginTop:-60
    },

    input:{
      backgroundColor: '#FFF',
    height: 48,
    width: 240,
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 18,
    },
    pickername:{
        alignItems:'center',
       
    }

});

export default styles;