import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Login' component={Login} />
        <Screen name='Main' component={Tabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Stack;