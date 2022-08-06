import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import {Colors, Fonts, Metrics} from '../../constants/Index';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @ArticleDetail
 **/

const ArticleDetail: FC<IProps> = ({route}: any) => {
  const {
    header,
    backButton,
    shareButton,
    headerText,
    container,
    imageContainer,
    detailsImage,
    newsDetails,
    titleText,
    miscInfo,
    authorInfo,
    likesCommentsInfo,
    imageContainers,
    imageStyle,
    authorName,
    publishDate,
    likesInfo,
    commentsInfo,
    counterText,
    authorNameContainer,
    detailsContainer,
    details,
  } = styles;
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    Alert.alert('Alert', 'Feature coming soon');
  };
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Share via',
      url: 'https://www.google.com',
    };
    try {
      const ShareResponse = await Share.share(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
    <SafeAreaView style={container}>
      <View style={header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={backButton}>
          <AntDesign name="arrowleft" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={headerText}>Kick Flicks</Text>
        <TouchableOpacity onPress={myCustomShare} style={shareButton}>
          <AntDesign name="sharealt" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={imageContainer}>
          <Image
            source={
              route.params.thumbnail
                ? route.params.thumbnail
                : route.params.image
            }
            style={detailsImage}
          />
        </View>
        <View style={newsDetails}>
          <View>
            <Text style={titleText}>{route.params.title}</Text>
          </View>
          <View style={miscInfo}>
            <View style={authorInfo}>
              <View style={imageContainers}>
                <Image source={route.params.author.avatar} style={imageStyle} />
              </View>
              <View style={authorNameContainer}>
                <Text style={authorName}>{route.params.author.name}</Text>
                <Text style={publishDate}>{route.params.date}</Text>
              </View>
            </View>
            <View style={likesCommentsInfo}>
              <TouchableOpacity style={likesInfo} onPress={handleOnPress}>
                <AntDesign name="hearto" size={20} color={Colors.white} />
                <Text style={counterText}>{route.params.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={commentsInfo} onPress={handleOnPress}>
                <AntDesign name="message1" size={20} color={Colors.white} />
                <Text style={counterText}>{route.params.comments}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={detailsContainer}>
          <Text style={details}>{route.params.detail}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH,
    backgroundColor: Colors.popularTeamsBackground,
  },
  backButton: {
    marginLeft: Metrics.marginHorizontal,
  },
  shareButton: {
    marginRight: Metrics.marginHorizontal,
  },
  headerText: {
    fontSize: Metrics.h3,
    color: Colors.white,
    fontFamily: Fonts.type.bold,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  imageContainer: {
    height: HEIGHT * 0.3,
    width: WIDTH * 0.914,
    marginHorizontal: Metrics.marginHorizontal,
  },
  detailsImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  newsDetails: {
    width: WIDTH * 0.914,
    marginHorizontal: Metrics.marginHorizontal,
    marginTop: Metrics.s10,
  },
  titleText: {
    color: Colors.white,
    fontSize: Metrics.h4,
    fontFamily: Fonts.type.bold,
  },
  miscInfo: {
    flexDirection: 'row',
    width: WIDTH * 0.914,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesCommentsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH * 0.32,
    alignItems: 'center',
  },
  imageContainers: {
    width: WIDTH * 0.1,
    height: WIDTH * 0.1,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  authorName: {
    color: Colors.white,
  },
  publishDate: {
    color: Colors.secondaryText,
  },
  likesInfo: {
    flexDirection: 'row',
  },
  commentsInfo: {
    flexDirection: 'row',
  },
  counterText: {
    color: Colors.white,
    marginLeft: 5,
  },
  authorNameContainer: {
    marginLeft: Metrics.s10,
  },
  detailsContainer: {
    width: WIDTH * 0.914,
    marginHorizontal: Metrics.marginHorizontal,
    marginTop: Metrics.s10,
  },
  details: {
    color: Colors.white,
    lineHeight: 20,
    fontFamily: Fonts.type.secondary,
    fontSize: Metrics.body4,
  },
});

export default ArticleDetail;
