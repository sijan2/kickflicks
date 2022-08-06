import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Discover, Explore, Standings, More} from '../../../screens/Index';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../constants/Index';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {HEIGHT} from '../../../utils/Dimensions';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {labelStyle, tabStyle} = styles;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.tabBackground,
          height: HEIGHT * 0.083,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabStyle}>
              <AntDesign
                name="home"
                color={focused ? Colors.primary : Colors.grey0}
                size={25}
              />
              <Text
                style={[
                  labelStyle,
                  {color: focused ? Colors.primary : Colors.grey0},
                ]}>
                Discover
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabStyle}>
              <MaterialIcons
                name="explore"
                color={focused ? Colors.primary : Colors.grey0}
                size={25}
              />
              <Text
                style={[
                  labelStyle,
                  {color: focused ? Colors.primary : Colors.grey0},
                ]}>
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabStyle}>
              <FeatherIcons
                name="bar-chart-2"
                color={focused ? Colors.primary : Colors.grey0}
                size={25}
              />
              <Text
                style={[
                  labelStyle,
                  {color: focused ? Colors.primary : Colors.grey0},
                ]}>
                Standings
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabStyle}>
              <FeatherIcons
                name="more-horizontal"
                color={focused ? Colors.primary : Colors.grey0}
                size={25}
              />
              <Text
                style={[
                  labelStyle,
                  {color: focused ? Colors.primary : Colors.grey0},
                ]}>
                More
              </Text>
            </View>
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
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 15 : 0,
  },
});
export default Tabs;
