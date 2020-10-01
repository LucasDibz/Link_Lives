import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </View>
  );
};

export default Home;
