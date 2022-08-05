import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
interface IProps {
  id?: string;
  thumbnail?: any;
  title?: string;
  type?: string;
  author?: any;
  views?: string;
  likes?: string;
  comments?: string;
  date?: string;
  detail?: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @ListNews
 **/

const ListNews: FC<IProps> = ({
  id,
  thumbnail,
  title,
  type,
  author,
  views,
  likes,
  comments,
  date,
  detail,
}) => {
  const {
    container,
    imageContainer,
    image,
    newsInfo,
    titleText,
    newsDetails,
    newsTitleContainer,
    commentsText,
  } = styles;
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('ArticleDetails', {
      id: id,
      thumbnail: thumbnail,
      title: title,
      type: type,
      author: author,
      views: views,
      likes: likes,
      comments: comments,
      date: date,
      detail: detail,
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={container}>
        <View style={imageContainer}>
          <Image source={thumbnail} style={image} />
        </View>
        <View style={newsInfo}>
          <View style={newsTitleContainer}>
            <Text style={titleText}>{title}</Text>
          </View>
          <View style={newsDetails}>
            <AntDesign name="message1" size={12} color={Colors.white} />
            <Text style={commentsText}>{comments}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: WIDTH * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.11,
    borderRadius: Metrics.s16,
    marginRight: Metrics.s10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  newsInfo: {
    flexDirection: 'column',
    width: WIDTH * 0.6,
  },
  newsTitleContainer: {},
  titleText: {
    fontSize: Metrics.body6,
    fontFamily: Fonts.type.regular,
  },
  newsDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  commentsText: {
    marginLeft: Metrics.s10,
    fontSize: Metrics.body5,
  },
});

export default ListNews;
