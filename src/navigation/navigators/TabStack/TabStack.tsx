import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from '../Tab/Tab';
import {Profile, ArticleDetail} from '../../../screens/Index';

const Stack = createStackNavigator();

const TabStacks = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArticleDetails"
      component={ArticleDetail}
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

export default TabStacks;
