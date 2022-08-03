/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, FlatList, Animated, SafeAreaView} from 'react-native';
import Carouselitem from './Items';
import {Colors} from '../../constants/Index';

import {HEIGHT, WIDTH} from '../../utils/Dimensions';
/**
 * @author Nitesh Raj Khanal
 * @function @Carousel
 **/

const Carousel = ({data}: any) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, WIDTH);

  if (data && data.length > 0) {
    return (
      <>
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({item}) => {
              return <Carouselitem item={item} />;
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
          />
          <View style={styles.bar}>
            {data.map((_: any, i: any) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: HEIGHT * 0.005,
                    width: WIDTH * 0.01,
                    backgroundColor: Colors.blue,
                    margin: 5,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </SafeAreaView>
      </>
    );
  }
  console.log('Please Provide Images');
  return null;
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  semiContainer: {
    marginHorizontal: 20,
  },
});

export default Carousel;
