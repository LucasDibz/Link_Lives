import React from 'react';
import { View, Text, TextInput, Image, Picker } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';
import { useState } from 'react';

const Register = () => {
  const [selectedValue, setSelectedValue] = useState();

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
        <View style={styles.pickerBody}>
          {/* Picker Status vital / */}
          <Text style={styles.pickername}>Status Vital</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 48, width: 288 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label='Vivo' value='vivo'></Picker.Item>
            <Picker.Item label='Falecido' value='falecido'></Picker.Item>
          </Picker>

          {/* Picker Genero / */}
          <Text style={[styles.pickername, { marginTop: 16 }]}>Genero</Text>
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 48,
              width: 288,
              color: 'black',
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label='Homem' value='homem'></Picker.Item>
            <Picker.Item label='Mulher' value='mulher'></Picker.Item>
            <Picker.Item label='Outros' value='outros'></Picker.Item>
          </Picker>

          {/* Picker Fumante / */}
          <Text style={[styles.pickername, { marginTop: 16 }]}>Fumante?</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 48, width: 288 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label='Sim' value='sim'></Picker.Item>
            <Picker.Item label='Não' value='não'></Picker.Item>
          </Picker>
        </View>
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
