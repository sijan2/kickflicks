import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author Nitesh Raj Khanal
 * @function @Standings
 **/

const Standings = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Standings</Text>
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

export default Standings;
