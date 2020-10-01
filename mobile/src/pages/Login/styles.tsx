import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    alignItems: 'center',
  },

  logo: {
    marginTop: 32,
    width: 260,
  },

  title: {
    fontSize: 28,
  },

  inputContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },

  input: {
    backgroundColor: '#FFF',
    height: 48,
    width: 240,
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#EB3C3C',
    width: 240,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },

  link: {
    marginTop: 48,
    fontSize: 18,
    fontWeight: '300',
  },

  texto: {},
});

export default styles;
