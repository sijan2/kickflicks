import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import EntryNav from '@navigation/EntryNav';
interface IProps {}

/**
 * @author
 * @function @Entry
 **/

const Entry: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <EntryNav />
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
export default Entry;
