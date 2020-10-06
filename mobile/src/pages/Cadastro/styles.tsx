import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
  },
  title: {
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  pickerBody: {
    marginLeft: 56,
    marginTop: 16,
  },

  input: {
    backgroundColor: '#FFF',
    height: 48,
    width: 288,
    borderRadius: 6,
    fontSize: 18,
    marginTop: 24,
    paddingLeft: 10,
  },
  pickername: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#EB3C3C',
    width: 288,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  switch: {
    width: 288,
  },
  pickerItem: {
    height: 48,
    width: 288,
    backgroundColor: '#FFF',
    borderRadius: 40,
    fontSize: 24,
  },
});

export default styles;
