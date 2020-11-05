import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import DonatorContext from '../context/Donator';
import Profile from '../pages/Profile';
import Home from '../pages/Home';

interface Donator {
  id: number;
  name: string;
  password: string;
  cpf: number;
  rg: number;
  email: string;
  smoker: boolean;
  genre: string;
  emailRelative: string;
  disease: string;
}

interface RouteParams {
  donator: Donator;
}

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
  const route = useRoute();
  const { donator } = route.params as RouteParams;
  return (
    <DonatorContext.Provider value={donator}>
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
          activeTintColor: '#EB3C3C',
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
    </DonatorContext.Provider>
  );
}

export default Tabs;
