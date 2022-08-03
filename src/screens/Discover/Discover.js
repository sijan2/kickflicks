import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author Nitesh Raj Khanal
 * @function @Discover
 **/

const Discover = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Discover</Text>
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
export default Discover;
