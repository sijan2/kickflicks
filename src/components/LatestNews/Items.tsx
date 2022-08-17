/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {HEIGHT} from '../../utils/Dimensions';
import ListNews from '../ListNews/ListNews';
import {btoa} from 'react-native-quick-base64';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @NewsItems
 **/

const NewsItems: FC<IProps> = () => {
  const [news, setNews] = React.useState<any>([]);
  const user = 'congress-mobile-apiuser';
  const pass = 'N3p@l!C0ngr355@2022';
  // base-64 encryption
  const auth = btoa(`${user}:${pass}`);

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://congress-api.server247.info/api/news/all-news/1/10',
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        },
      );
      const responseJson = await response.json();
      setNews(responseJson.data);
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  const {container, listContainer} = styles;
  return (
    <View style={container}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        contentContainerStyle={listContainer}
        renderItem={({item}) => {
          return (
            <ListNews
              id={item.id}
              title={item.title}
              date={item.published_date}
              detail={item.description}
              // id={items.item.id}
              // image={items.item.thumbnail}
              // title={items.item.title}
              // type={items.item.type}
              // author={items.item.author}
              // views={items.item.views}
              // likes={items.item.likes}
              // comments={items.item.comments}
              // date={items.item.date}
              // detail={items.item.detail}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: HEIGHT * 0.1,
  },
  listContainer: {
    paddingBottom: HEIGHT * 0.084,
  },
});

export default NewsItems;
