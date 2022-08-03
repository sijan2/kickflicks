import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile} from '../../../screens/Index';

const Stack = createStackNavigator();

const Stacks = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
