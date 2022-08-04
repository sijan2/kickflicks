import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  name?: string;
  team1name?: string;
  team1logo?: any;
  team2name?: string;
  team2logo?: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @LogoContainer
 **/

const LogosContainer: FC<IProps> = ({
  name,
  team1name,
  team1logo,
  team2name,
  team2logo,
}) => {
  const {
    imageContainer,
    imageStyle,
    stadiumNameContainer,
    stadiumName,
    teamMatches,
    team1Image,
    team2Image,
    teamNames,
    teamName,
  } = styles;
  return (
    <View>
      <TouchableOpacity style={imageContainer}>
        <View style={stadiumNameContainer}>
          <MaterialCommunityIcons
            name="stadium"
            size={24}
            color={Colors.blue}
          />
          <Text style={stadiumName}>{name}</Text>
        </View>
        <View style={teamMatches}>
          <View style={team1Image}>
            <Image source={team1logo} style={imageStyle} />
          </View>
          <View style={team2Image}>
            <Image source={team2logo} style={imageStyle} />
          </View>
        </View>
        <View style={teamNames}>
          <Text style={teamName}>{team1name}</Text>
          <Text style={teamName}>vs</Text>
          <Text style={teamName}>{team2name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.blue,
    borderRadius: Metrics.s10,
    width: WIDTH * 0.4,
    height: HEIGHT * 0.22,
    margin: 10,
    padding: 5,
  },
  stadiumNameContainer: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.s16,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT * 0.035,
    flexDirection: 'row',
  },
  stadiumName: {
    fontSize: Metrics.body7,
    color: Colors.blue,
    fontFamily: Fonts.type.bold,
  },
  team1Image: {
    width: WIDTH * 0.13,
    height: WIDTH * 0.14,
  },
  team2Image: {
    width: WIDTH * 0.13,
    height: WIDTH * 0.14,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  teamMatches: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 3,
  },
  teamNames: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  teamName: {
    fontSize: Metrics.body5,
    color: Colors.white,
    fontFamily: Fonts.type.bold,
  },
});
export default LogosContainer;
