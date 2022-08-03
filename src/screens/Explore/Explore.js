import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author Nitesh Raj Khanal
 * @function @Explore
 **/

const Explore = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Explore;
