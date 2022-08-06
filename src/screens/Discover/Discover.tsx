import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HighlightedNews from '../../components/HighlightedNews/HighlightedNews';
import LatestNews from '../../components/LatestNews/LatestNews';
import PopularTeams from '../../components/PopularTeams/PopularTeams';
import UpcomingMatches from '../../components/UpcomingMatches/UpcomingMatches';
import {Colors} from '../../constants/Index';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Discover
 **/

const Discover: FC<IProps> = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <CustomHeader />
        <HighlightedNews />
        <PopularTeams />
        <UpcomingMatches />
        <LatestNews />
      </ScrollView>
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
