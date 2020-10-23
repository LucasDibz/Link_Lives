import React, { useState } from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import styles from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [email, setEmail] = useState('');
  const [smoker, setSmoker] = useState(false);
  const [genre, setGenre] = useState('Masculino');
  const [emailRelative, setEmailRelative] = useState('');
  const [disease, setDisease] = useState('');

  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  async function handleCadastrar() {
    const data = {
      name,
      password,
      cpf: parseInt(cpf),
      rg: parseInt(rg),
      email,
      smoker,
      genre,
      emailRelative,
      disease,
    };

    if (!name || !cpf || !rg || !email || !genre || !emailRelative) {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    await api.post('/donators', data);
    alert('Doador cadastrado.');
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
          justifyContent: 'center',
        }}
      >
        <View style={styles.header}>
          <Feather
            name="arrow-left"
            size={24}
            onPress={handleNavigateBack}
            style={styles.icon}
          />
        </View>
        <Image style={styles.logo} source={logo} />

        <View style={styles.body}>
          <Text style={styles.title}>Informe dados para cadastro</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Nome'}
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            <TextInput
              placeholder={'CPF'}
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
            />

            <TextInput
              placeholder={'Senha'}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput
              placeholder={'RG'}
              style={styles.input}
              value={rg}
              onChangeText={setRg}
            />

            <TextInput
              placeholder={'Email'}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.switchText}>Gênero</Text>

            <SwitchSelector
              height={48}
              fontSize={18}
              buttonColor="#EB3C3C"
              style={styles.switch}
              options={[
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Feminino', value: 'Feminino' },
                { label: 'Outros', value: 'Outros' },
              ]}
              initial={0}
              onPress={(value: string) => setGenre(value)}
            />

            <Text style={styles.switchText}>Fumante?</Text>

            <SwitchSelector
              fontSize={18}
              buttonColor="#EB3C3C"
              style={styles.switch}
              options={[
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 },
              ]}
              initial={0}
              onPress={(value: number) => setSmoker(value === 1)}
            />

            <TextInput
              placeholder={'Descrição caso tenha doença infecciosa'}
              style={styles.input}
              value={disease}
              onChangeText={setDisease}
            />

            <TextInput
              placeholder={'Email de um parente'}
              style={styles.input}
              value={emailRelative}
              onChangeText={setEmailRelative}
            />
          </View>

          <RectButton onPress={handleCadastrar} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
