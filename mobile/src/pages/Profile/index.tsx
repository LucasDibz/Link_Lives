import React, { useContext, useState } from 'react';
import { ScrollView, Text, TextInput, View, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DonatorContext from '../../context/Donator';
import api from '../../services/api';
import styles from './styles';

const Profile = () => {
  const { navigate, goBack } = useNavigation();
  const donator = useContext(DonatorContext);

  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState(donator.password);
  const [email, setEmail] = useState(donator.email);
  const [emailRelative, setEmailRelative] = useState(donator.emailRelative);
  const [disease, setDisease] = useState(donator.disease);

  function navigateBack() {
    goBack();
  }

  function confirmDeleteAccount() {
    Alert.alert(
      'Deseja deletar a sua conta?',
      'O mundo precisa de doadores!',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim, deletar',
          style: 'destructive',
          onPress: deleteAccount,
        },
      ],
      { cancelable: false }
    );
  }

  async function deleteAccount() {
    await api.delete(`/donators/${donator.cpf}`);
    alert('Sua conta foi deletada.');
    navigate('Login');
  }

  async function updateInfo() {
    await api.put(`/donators/${donator.id}`, {
      ...donator,
      password,
      email,
      emailRelative,
      disease,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View style={styles.header}>
          <FontAwesome
            name='arrow-left'
            size={28}
            style={styles.icon}
            onPress={navigateBack}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.info}>
            <Text style={styles.name}>{donator?.name}</Text>
            <FontAwesome
              name='edit'
              size={24}
              onPress={() => {
                setEdit(!edit);
                edit && updateInfo();
              }}
            />
          </View>

          <Text style={styles.texto}>CPF</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={donator?.cpf.toString()}
          />

          <View style={styles.inputContainer}>
            <Text style={styles.texto}>Senha</Text>
            <TextInput
              editable={edit}
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />

            <Text style={styles.texto}>RG</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.rg.toString()}
            />

            <Text style={styles.texto}>Email</Text>
            <TextInput
              editable={edit}
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />

            <Text style={styles.texto}>Email Parente</Text>
            <TextInput
              editable={edit}
              style={styles.input}
              value={emailRelative}
              onChangeText={(value) => setEmailRelative(value)}
            />

            <Text style={styles.texto}>Gênero</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.genre}
            />

            <Text style={styles.texto}>Fumante</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.smoker ? 'Sim' : 'Não'}
            />

            <Text style={styles.texto}>Doença</Text>
            <TextInput
              editable={edit}
              style={styles.input}
              value={disease}
              onChangeText={(value) => setDisease(value)}
            />
          </View>

          <Text style={styles.deleteAccount} onPress={confirmDeleteAccount}>
            Deletar Conta
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
