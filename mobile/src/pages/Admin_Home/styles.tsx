import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    alignItems: 'center',
  },
  logo: {
    width: 240,
  },

  title: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: 16,
  },
  title2: {
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  button: {
    width: 248,
    height: 96,
    backgroundColor: '#EB3C3C',
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    padding: 16,
  },
  buttonText: {
    fontSize: 20,
    marginLeft: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 48,
    fontSize: 16,
  },
});

export default styles;
