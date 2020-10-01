import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Picker,
  StyleSheet,
  Button,
} from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import logo from "../../assets/logo.png";

const Register = () => {
  const { goBack } = useNavigation();

  function cadastrado() {
    goBack();
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>
          Insira seus dados para se tornar um doador
        </Text>

        <TextInput
          placeholder={"Nome"}
          style={[styles.input, { marginTop: 16 }]}
        />

        <TextInput
          placeholder={"CPF"}
          style={[styles.input, { marginTop: 16 }]}
        />

        <TextInput
          placeholder={"RG"}
          style={[styles.input, { marginTop: 16 }]}
        />

        <TextInput
          placeholder={"Email"}
          style={[styles.input, { marginTop: 16 }]}
        />

        <TextInput
          placeholder={"Data de Nascimento"}
          style={[styles.input, { marginTop: 16 }]}
        />

        {/* Picker Status vital / */}
        <Text style={[styles.pickername, { marginTop: 16 }]}>Status Vital</Text>
        <Picker selectedValue={this}>
          <Picker.Item label="Vivo" value=""></Picker.Item>
          <Picker.Item label="Falecido"></Picker.Item>
        </Picker>

        {/* Picker Genero / */}
        <Text style={[styles.pickername, { marginTop: 16 }]}>Genero</Text>
        <Picker selectedValue={this}>
          <Picker.Item label="Homem" value=""></Picker.Item>
          <Picker.Item label="Mulher"></Picker.Item>
          <Picker.Item label="Outros"></Picker.Item>
        </Picker>
        {/* Picker Fumante / */}
        <Text style={[styles.pickername, { marginTop: 16 }]}>Fumante?</Text>
        <Picker selectedValue={this}>
          <Picker.Item label="Sim" value=""></Picker.Item>
          <Picker.Item label="Não"></Picker.Item>
        </Picker>

        <TextInput
          placeholder={"Descrição caso tenha doença infecciosa"}
          style={[styles.input, { marginTop: 16 }]}
        />
        <TextInput
          placeholder={"Email de um parente"}
          style={[styles.input, { marginTop: 16 }]}
        />

        <RectButton
          onPress={cadastrado}
          style={[styles.input, { marginTop: 16 }]}
        >
          <Text>Cadastrar</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default Register;
