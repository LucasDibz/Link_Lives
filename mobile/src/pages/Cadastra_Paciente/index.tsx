import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import styles from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [genre, setGenre] = useState(0);
  const [smoker, setSmoker] = useState(false);
  const [disease, setDisease] = useState('');
  const [emailParente, setEmailParente] = useState('');
  const [heart, setHeart] = React.useState(false);
  const [lungs, setLungs] = React.useState(false);
  const [kidney, setKidney] = React.useState(false);
  const [liver, setLiver] = React.useState(false);
  const [intestine, setIntestine] = React.useState(false);
  const [pancreas, setPancreas] = React.useState(false);

  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleCadastrar() {
    console.log({
      name,
      cpf,
      rg,
      email,
      birthday,
      genre,
      smoker,
      disease,
      emailParente,
    });
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

            <TextInput
              placeholder={'Data de Nascimento'}
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
            />

            <Text style={styles.checkBoxText}>Orgãos necessários:</Text>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Coração'
                checked={heart}
                onPress={() => setHeart(!heart)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                size={24}
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Pulmão'
                checked={lungs}
                onPress={() => setLungs(!lungs)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Fígado'
                checked={liver}
                onPress={() => setLiver(!liver)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Rins'
                checked={kidney}
                onPress={() => setKidney(!kidney)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title='Pancreas'
                checked={pancreas}
                onPress={() => setPancreas(!pancreas)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />

              <CheckBox
                title='Intestino'
                checked={intestine}
                onPress={() => setIntestine(!intestine)}
                containerStyle={styles.containerStyle}
                checkedColor='black'
                textStyle={{ fontSize: 18 }}
                uncheckedColor='#EB3C3C'
              />
            </View>

            <TextInput
              placeholder={'Descrição caso tenha doença infecciosa'}
              style={styles.input}
              value={disease}
              onChangeText={setDisease}
            />

            <TextInput
              placeholder={'Email de um parente'}
              style={styles.input}
              value={emailParente}
              onChangeText={setEmailParente}
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
