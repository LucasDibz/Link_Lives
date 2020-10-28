import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F5',
  },

  header: {
    backgroundColor: '#EB3C3C',
    width: '100%',
    height: '10%',
    borderBottomLeftRadius: 169,
  },

  icon: {
    marginTop: 32,
    marginLeft: 16,
  },

  body: {
    marginLeft: 16,
  },

  info: {
    marginTop: 16,
    marginLeft: -16,
  },

  name: {
    marginLeft: 16,
    fontSize: 20,
  },

  inputContainer: {},

  texto: {
    fontSize: 18,
    marginTop: 56,
    zIndex: 1,
    color: 'black',
    fontStyle: 'italic',
  },

  input: {
    fontSize: 18,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EB3C3C',

    width: '90%',
  },

  deleteAccount: {
    fontSize: 16,
    marginTop: 40,
    marginRight: 15,
    color: 'red',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    opacity: 0.6,
    alignSelf: 'flex-end',
  },
});

export default styles;
