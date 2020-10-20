import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const CadastrarObito = () => {
  const [heart, setHeart] = React.useState(false);
  const [lungs, setLungs] = React.useState(false);
  const [kidney, setKidney] = React.useState(false);
  const [liver, setLiver] = React.useState(false);
  const [intestine, setIntestine] = React.useState(false);
  const [pancreas, setPancreas] = React.useState(false);

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleSearch() {}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name='arrow-left'
          size={24}
          onPress={handleNavigateBack}
          style={styles.icon}
        />
      </View>

      <View style={styles.body}>
        <TextInput style={styles.inputSearch} placeholder='Informe o CPF' />

        <RectButton onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </RectButton>

        <Text style={styles.label}>Nome</Text>
        <TextInput editable={false} style={styles.inputResult}>
          Fabio Pinheiro Monteiro
        </TextInput>

        <Text style={styles.checkBoxText}>Orgãos disponíveis para doação:</Text>
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
        <RectButton onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar óbito</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default CadastrarObito;
