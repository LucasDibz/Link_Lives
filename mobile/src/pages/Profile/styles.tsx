import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F5',
  },
  header: {
    backgroundColor: '#EB3C3C',
    width: '100%',
    height: 176,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  foto: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
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
  },

  input: {
    fontSize: 18,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EB3C3C',

    width: 328,
  },
});

export default styles;
