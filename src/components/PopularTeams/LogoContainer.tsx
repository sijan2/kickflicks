import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

interface IProps {
  image?: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @LogoContainer
 **/

const LogoContainer: FC<IProps> = ({image}) => {
  const {container, imageContainer, imageStyle} = styles;
  return (
    <View style={container}>
      <TouchableOpacity style={imageContainer}>
        <Image source={image} style={imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.popularTeamsBackground,
    borderRadius: Metrics.s10,
    width: WIDTH * 0.2,
    height: HEIGHT * 0.086,
    margin: 10,
    padding: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default LogoContainer;
