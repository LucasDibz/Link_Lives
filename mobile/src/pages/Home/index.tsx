import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../../services/api';
import styles from './styles';

interface News {
  nome: string;
  casosAcumulado: number;
  obitosAcumulado: number;
}

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    api
      .get(
        'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalRegiaoSaude'
      )
      .then(({ data }) => setNews(data));
  }, []);

  function renderNews(item: News) {
    return (
      <View style={styles.box}>
        <Text style={[styles.boxText, styles.boxTitle]}>{item.nome}</Text>
        <Text style={styles.boxText}>
          Óbitos: <Text style={styles.boxDeaths}>{item.obitosAcumulado}</Text>
        </Text>
        <Text style={styles.boxText}>
          Casos: <Text style={styles.boxCases}>{item.casosAcumulado}</Text>
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status Coronavirus Brasil</Text>
      <FlatList
        keyExtractor={(item: News) => item.nome}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({ item }) => renderNews(item)}
        initialNumToRender={10}
      />
    </View>
  );
};

export default Home;
