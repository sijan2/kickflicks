/* eslint-disable react-native/no-inline-styles */
import React, {FC, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';

import {Teams} from '../../mock/Dummy';
import LogoContainer from './LogoContainer';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @PopularListing
 **/

const PopularListing: FC<IProps> = () => {
  const {container, list} = styles;
  const data = Teams;
  const ref = useRef<FlatList>(null);
  const [index] = useState(0);
  return (
    <View style={container}>
      <ScrollView style={list}>
        <FlatList
          ref={ref}
          data={data}
          initialScrollIndex={index}
          contentContainerStyle={{
            paddingHorizontal: 0,
          }}
          keyExtractor={(item, indexes) => 'key' + indexes}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <LogoContainer image={item.logo} />;
          }}
          style={styles.container}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  list: {},
});

export default PopularListing;
