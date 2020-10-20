import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F0F0F5',
  },

  header: {
    flexDirection: 'column',
  },

  icon: {
    marginLeft: 16,
    marginTop: 8,
  },

  logo: {
    width: 240,
    alignSelf: 'center',
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },

  title: {
    fontSize: 20,
    color: 'black',
  },

  inputContainer: {
    marginTop: 30,
    width: '100%',
  },

  input: {
    backgroundColor: '#FFF',
    height: 48,
    borderRadius: 6,
    fontSize: 18,
    marginTop: 24,
    paddingLeft: 10,
  },

  checkBoxText: {
    fontSize: 24,
    color: '#EB3C3C',
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24,
  },

  containerStyle: {
    backgroundColor: '#F0F0F5',
    width: 140,
  },

  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#EB3C3C',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 24,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;
