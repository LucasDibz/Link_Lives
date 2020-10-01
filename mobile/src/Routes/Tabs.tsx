import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Profile from '../pages/Profile';
import Home from '../pages/Home';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='home' size={size} color={color} />;
          },
        }}
      />

      <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='user' size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default Tabs;
