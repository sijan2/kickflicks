import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @More
 **/

const More: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>More</Text>
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

export default More;
