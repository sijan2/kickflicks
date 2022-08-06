import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
interface IProps {
  team1name?: string;
  team1logo?: any;
  team2name?: string;
  team2logo?: any;
  matchTime?: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @LogoContainer
 **/

const LogosContainer: FC<IProps> = ({team1logo, team2logo, matchTime}) => {
  const {
    imageContainer,
    imageStyle,
    teamMatches,
    team1Image,
    team2Image,
    matchDateStyle,
    matchDateText,
  } = styles;
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={Colors.linearGradient}
        style={imageContainer}>
        <TouchableOpacity>
          <View style={teamMatches}>
            <View style={team1Image}>
              <Image source={team1logo} style={imageStyle} />
            </View>
            <View style={team2Image}>
              <Image source={team2logo} style={imageStyle} />
            </View>
          </View>

          <View style={matchDateStyle}>
            <AntDesign name="clockcircleo" size={15} color={Colors.blue} />
            <Text style={matchDateText}>{matchTime}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.blue,
    borderRadius: Metrics.s10,
    width: WIDTH * 0.25,
    height: HEIGHT * 0.11,
    margin: 10,
    padding: 5,
    justifyContent: 'center',
  },
  team1Image: {
    width: WIDTH * 0.11,
    height: WIDTH * 0.11,
  },
  team2Image: {
    width: WIDTH * 0.11,
    height: WIDTH * 0.11,
    marginLeft: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  teamMatches: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  matchDateStyle: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.s16,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT * 0.025,
    flexDirection: 'row',
    marginTop: 5,
  },
  matchDateText: {
    fontSize: Metrics.body7,
    color: Colors.blue,
    fontFamily: Fonts.type.bold,
    marginLeft: 3,
  },
});
export default LogosContainer;
