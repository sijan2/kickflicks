import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors, Fonts} from '../../constants/Index';
import {useNavigation} from '@react-navigation/native';
import {Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import SoccerLogo from '../../assets/images/Soccer1.png';
/**
 * @author Nitesh Raj Khanal
 * @function @Items
 **/

interface Ilist {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  description?: string;
  item?: any;
  index?: any;
}

const Carouselitem: FC<Ilist> = ({item}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('ArticleDetails', {
      id: item.id,
      image: item.image,
      title: item.title,
      name: item.name,
      date: item.date,
      description: item.description,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={Colors.linearGradient}
          style={styles.cardView}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
          </View>
          <View style={styles.textView}>
            <View style={styles.footballIconContainer}>
              <Image source={SoccerLogo} style={styles.footballIcon} />
              <Text style={styles.footballText}>Football</Text>
            </View>
            <ScrollView>
              <Text style={styles.title}>{item.title}</Text>
            </ScrollView>
            <View style={styles.nested}>
              <Text style={styles.text}>{item.date}</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: WIDTH * 0.914,
    height: HEIGHT * 0.255,
    backgroundColor: Colors.background,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: WIDTH * 0.04,
    borderRadius: 20,
  },
  textView: {
    position: 'absolute',
    zIndex: 2,
    margin: 10,
    borderRadius: 10,
    opacity: 0.95,
    width: '50%',
  },
  footballIconContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 40,
    width: WIDTH * 0.25,
    height: HEIGHT * 0.035,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  footballIcon: {
    marginLeft: 5,
    width: WIDTH * 0.045,
    height: WIDTH * 0.045,
  },
  footballText: {
    marginLeft: 5,
    fontSize: Metrics.body4,
    fontFamily: Fonts.type.semi,
    color: Colors.black,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    marginLeft: WIDTH * 0.457,
    zIndex: 1,
  },
  image: {
    width: '50%',
    height: '100%',
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: Metrics.h6,
    lineHeight: 19,
    letterSpacing: 0.4,
    color: Colors.white,
    fontFamily: Fonts.type.poppinsSemiBold,
  },
  text: {
    flexDirection: 'row',
    fontSize: Metrics.body6,
    fontFamily: Fonts.type.secondary,
    color: Colors.white,
    marginTop: 15,
    lineHeight: 13,
    marginBottom: 10,
  },
  nested: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 55,
  },
});

export default Carouselitem;
