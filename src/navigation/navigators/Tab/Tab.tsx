import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Discover, Explore, Standings, More} from '../../../screens/Index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Discover} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Standings" component={Standings} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};
export default Tabs;
