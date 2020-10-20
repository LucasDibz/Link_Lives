import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Tabs from './Tabs';
import Admin from '../pages/Admin_Home';
import CadastraPaciente from '../pages/Cadastra_Paciente';
import CadastraObito from '../pages/Cadastra_Obito';

const { Navigator, Screen } = createStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Admin' component={Admin} />
        <Screen name='CadastraObito' component={CadastraObito} />
        <Screen name='CadastraPaciente' component={CadastraPaciente} />
        <Screen name='Login' component={Login} />
        <Screen name='Cadastro' component={Cadastro} />
        <Screen name='Main' component={Tabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Stack;
