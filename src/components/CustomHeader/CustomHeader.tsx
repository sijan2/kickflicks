import React, {FC} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal˝
 * @function @CustomHeader
 **/

const CustomHeader: FC<IProps> = () => {
  const {container} = styles;
  return (
    <SafeAreaView style={container}>
      <Text>CustomHeader</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
