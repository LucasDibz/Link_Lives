import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DonatorContext from '../../context/Donator';
import api from '../../services/api';
import styles from './styles';

const Profile = () => {
  const { navigate, goBack } = useNavigation();

  const donator = useContext(DonatorContext);

  function NavigateBack() {
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
            onPress={NavigateBack}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.info}>
            <Text style={styles.name}>{donator?.name}</Text>
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
              editable={false}
              style={styles.input}
              value={donator?.password}
            />

            <Text style={styles.texto}>RG</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.rg.toString()}
            />

            <Text style={styles.texto}>Email</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.email}
            />

            <Text style={styles.texto}>Email Parente</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={donator?.emailRelative}
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
              editable={false}
              style={styles.input}
              value={donator?.disease}
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
