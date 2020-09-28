import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import logo from '../../../assets/logo.png';

import styles from './styles';
import { Input } from 'react-native-elements';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Faça seu Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>Sua ID</Text>
        <TextInput style={styles.input} />

        <Text style={styles.placeholder}>Senha</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default Login;
