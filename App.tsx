import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import Entry from './src/EntryPoint';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @App
 **/

const App: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Entry />
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

export default App;
