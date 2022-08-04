import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import {WIDTH} from '../../utils/Dimensions';
interface IProps {}

/**
 * @author Nitesh Raj Khanal˝
 * @function @CustomHeader
 **/

const CustomHeader: FC<IProps> = () => {
  const handleOnPress = () => {
    Alert.alert('Feature Coming Soon');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Discover</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleOnPress}>
          <Ionicons name="ios-search" size={24} color={Colors.grey0} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnPress}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={Colors.grey0}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.marginHorizontal,
    alignItems: 'center',
  },
  headerText: {
    fontSize: Metrics.h2,
    color: Colors.white,
    fontFamily: Fonts.type.extra,
    letterSpacing: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    width: WIDTH * 0.165,
    justifyContent: 'space-between',
  },
  searchContainer: {},
  notificationContainer: {},
});

export default CustomHeader;
