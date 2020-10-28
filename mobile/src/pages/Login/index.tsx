import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    if (cpf === 'admin' && password === 'admin') {
      navigate('Admin');
      return;
    }

    try {
      const { data: donator } = await api.get(`/donators/${cpf}`);

      donator && donator.password === password
        ? navigate('Main', { donator })
        : alert('Senha incorreta!');
    } catch (error) {
      alert('Usuário não encontrado!');
    }
  }

  function cadastro() {
    navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Faça seu Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Informe o seu CPF'}
          style={styles.input}
          onChangeText={(value) => setCpf(value)}
          value={cpf}
        />

        <TextInput
          placeholder={'Senha'}
          style={[styles.input, { marginTop: 16 }]}
          onChangeText={(value) => setPassword(value)}
          value={password}
          secureTextEntry
        />

        <RectButton style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <Text style={styles.link} onPress={cadastro}>
          <FontAwesome name={'angle-right'} size={24} color={'#EB3C3C'} />
          Não tenho cadastro
        </Text>
      </View>
    </View>
  );
};

export default Login;
