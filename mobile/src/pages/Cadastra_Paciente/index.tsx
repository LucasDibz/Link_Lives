import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import api from '../../services/api';

import styles from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const [organs, setOrgans] = useState<string[]>([]);

  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  async function handleCadastrar() {
    const data = {
      name,
      cpf: parseInt(cpf),
      email,
      orgaoNecessitado: organs,
    };

    if (!name || !cpf || !email || !organs) {
      alert('Por favor preencha todas as informações!');
      return;
    }

    await api.post('/patients', data);

    alert('Paciente Cadastrado!');

    navigate('Admin');
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
            name='arrow-left'
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
              placeholder={'Email'}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.checkBoxText}>Orgãos necessários:</Text>
            <Text
              onPress={() => setOrgans([])}
              style={{ marginBottom: 15, color: 'grey' }}
            >
              Limpar orgãos
            </Text>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Coração'
                checked={organs.includes('heart')}
                onPress={() => setOrgans([...organs, 'heart'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                size={24}
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Pulmão'
                checked={organs.includes('lung')}
                onPress={() => setOrgans([...organs, 'lung'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Fígado'
                checked={organs.includes('liver')}
                onPress={() => setOrgans([...organs, 'liver'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Rins'
                checked={organs.includes('kidney')}
                onPress={() => setOrgans([...organs, 'kidney'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Pancreas'
                checked={organs.includes('pancreas')}
                onPress={() => setOrgans([...organs, 'pancreas'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Intestino'
                checked={organs.includes('intestine')}
                onPress={() => setOrgans([...organs, 'intestine'])}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>
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
