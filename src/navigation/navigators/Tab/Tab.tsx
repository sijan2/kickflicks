import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Discover, Explore, Standings, More} from '../../../screens/Index';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../constants/Index';
import {StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {labelStyle} = styles;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.tabBackground,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              color={focused ? Colors.primary : Colors.grey0}
              size={25}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                labelStyle,
                {color: focused ? Colors.primary : Colors.grey0},
              ]}>
              Discover
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="explore"
              color={focused ? Colors.primary : Colors.grey0}
              size={25}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                labelStyle,
                {color: focused ? Colors.primary : Colors.grey0},
              ]}>
              Explore
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="bar-chart-2"
              color={focused ? Colors.primary : Colors.grey0}
              size={25}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                labelStyle,
                {color: focused ? Colors.primary : Colors.grey0},
              ]}>
              Standings
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="more-horizontal"
              color={focused ? Colors.primary : Colors.grey0}
              size={25}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                labelStyle,
                {color: focused ? Colors.primary : Colors.grey0},
              ]}>
              More
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: Fonts.type.regular,
  },
});
export default Tabs;
