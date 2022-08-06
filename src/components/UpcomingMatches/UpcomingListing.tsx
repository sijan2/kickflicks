/* eslint-disable react-native/no-inline-styles */
import React, {FC, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';

import {Matches} from '../../mock/Dummy';
import LogosContainer from './LogosContainer';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @PopularListing
 **/

const PopularListing: FC<IProps> = () => {
  const {container, list} = styles;
  const data = Matches;
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
            return (
              <LogosContainer
                team1name={item.team1.name}
                team1logo={item.team1.logo}
                team2name={item.team2.name}
                team2logo={item.team2.logo}
                matchTime={item.time}
              />
            );
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
