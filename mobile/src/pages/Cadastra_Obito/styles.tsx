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

  body: {
    marginLeft: 16,
    marginRight: 16,
  },

  inputSearch: {
    height: 48,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 6,
    marginTop: 24,
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1.4,
    borderColor: 'gray',
  },

  button: {
    width: '70%',
    height: 48,
    borderRadius: 6,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB3C3C',
    marginLeft: '30%',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },

  label: {
    marginTop: 24,
    marginBottom: 16,
    fontSize: 24,
  },

  inputResult: {
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EB3C3C',
    marginBottom: 24,
  },

  checkBoxText: {
    fontSize: 18,
    color: 'black',
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
});

export default styles;
