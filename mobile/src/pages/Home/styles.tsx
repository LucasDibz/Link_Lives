import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EB3C3C',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    color: '#F0F0F5',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 10,
  },

  box: {
    backgroundColor: '#F0F0F5',
    width: '100%',
    height: 150,
    marginTop: 30,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  boxText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginLeft: 20,
    color: 'black',
  },

  boxTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  boxDeaths: {
    color: '#EB3C3C',
    letterSpacing: 1,
  },

  boxCases: {
    color: '#00732e',
    letterSpacing: 1,
  },
});

export default styles;
