import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HighlightedNews from '../../components/HighlightedNews/HighlightedNews';
import {Colors} from '../../constants/Index';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Discover
 **/

const Discover: FC<IProps> = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <HighlightedNews />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Discover;
