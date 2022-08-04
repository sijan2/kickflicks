import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import PopularListing from './PopularListing';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @PopularTeams
 **/

const PopularTeams: FC<IProps> = () => {
  const {container, popularText, viewAll} = styles;
  const handleOnPress = () => {
    Alert.alert('Feature Coming Soon');
  };
  return (
    <>
      <View style={container}>
        <View>
          <Text style={popularText}>Popular Teams</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={viewAll}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <PopularListing />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.marginHorizontal,
    alignItems: 'center',
  },
  popularText: {
    fontSize: Metrics.h4,
    fontFamily: Fonts.type.bold,
    letterSpacing: 1,
    color: Colors.white,
  },
  viewAll: {
    fontSize: Metrics.body6,
    letterSpacing: 0.7,
    color: Colors.white,
    fontFamily: Fonts.type.primary,
  },
});

export default PopularTeams;
