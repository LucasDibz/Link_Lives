import React from 'react';

import { useNavigation, Link } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { ScrollView, Image, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';

const Profile = () => {
  const { goBack } = useNavigation();

  function NavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
      >
        <View style={styles.header}></View>
        <View style={styles.body}>
          <View style={styles.info}>
            <Image
              style={styles.foto}
              source={{
                uri:
                  'https://instagram.fcgh23-1.fna.fbcdn.net/v/t51.2885-19/10864726_897378970286008_749804459_a.jpg?_nc_ht=instagram.fcgh23-1.fna.fbcdn.net&_nc_ohc=xeRFT03JkQ0AX_BNPFh&oh=48f3506bc7d07bef58f33fc96820c6c6&oe=5F9DB58A',
              }}
            />
            <Text style={styles.name}>Fabio Monteiro </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput editable={false} style={styles.input} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
