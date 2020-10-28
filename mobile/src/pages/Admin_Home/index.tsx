import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import styles from './styles';

const AdminHome = () => {
  const { navigate } = useNavigation();
  function óbito() {
    navigate('CadastraObito');
  }

  function paciente() {
    navigate('CadastraPaciente');
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View>
        <Text style={styles.title}>
          Bem vindo, {'\n'}
          <Text style={styles.title2}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={styles.button} onPress={óbito}>
            <MaterialIcons name={'favorite'} size={24} color={'#FFFFFF'} />
            <Text style={styles.buttonText}>Cadastrar obito</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={paciente}>
            <FontAwesome name={'user-plus'} size={24} color={'#FFFFFF'} />
            <Text style={styles.buttonText}>Cadastrar paciente</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default AdminHome;
