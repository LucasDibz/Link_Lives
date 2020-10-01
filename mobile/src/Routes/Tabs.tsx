import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

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

        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        activeBackgroundColor: '#ebebf5',
        inactiveBackgroundColor: '#FAFAFC',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D',
      }}
    >
      <Screen name='Home' component={Home}
      
      />


      <Screen name='Profile' component={Profile} />
    </Navigator>
  );
}

export default Tabs;
