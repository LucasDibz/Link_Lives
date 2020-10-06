import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { View, Text, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';
import { useState } from 'react';

const Register = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const { goBack } = useNavigation();

  function cadastrado() {
    goBack();
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
          <FontAwesome
            name='arrow-left'
            size={26}
            onPress={cadastrado}
            style={styles.icon}
          />
        </View>
        <View style={styles.body}>
          <Image style={styles.logo} source={logo} />

          <Text style={styles.title}>Informe dados para cadastro</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder={'Nome'} style={styles.input} />

            <TextInput placeholder={'CPF'} style={styles.input} />

            <TextInput placeholder={'RG'} style={styles.input} />

            <TextInput placeholder={'Email'} style={styles.input} />

            <TextInput
              placeholder={'Data de Nascimento'}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.pickerBody}>{/* Picker Status vital / */}</View>
        <SwitchSelector
          buttonColor='#EB3C3C'
          style={styles.switch}
          options={[
            { label: 'Masculino', value: 0 },
            { label: 'Feminino', value: 1 },
            { label: 'Outros', value: 2 },
          ]}
          initial={0}
          onPress={(value) => console.log(`Call onPress with value: ${value}`)}
        />
        <SwitchSelector
          buttonColor='#EB3C3C'
          style={styles.switch}
          options={[
            { label: 'Sim', value: 0 },
            { label: 'Não', value: 1 },
          ]}
          initial={0}
          onPress={(value) => set}
        />
        <View style={styles.body}>
          <TextInput
            placeholder={'Descrição caso tenha doença infecciosa'}
            style={styles.input}
          />
          <TextInput placeholder={'Email de um parente'} style={styles.input} />

          <RectButton onPress={cadastrado} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
