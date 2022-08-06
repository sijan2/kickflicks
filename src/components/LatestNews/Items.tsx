import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {News} from '../../mock/Dummy';
import {HEIGHT} from '../../utils/Dimensions';
import ListNews from '../ListNews/ListNews';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @NewsItems
 **/

const NewsItems: FC<IProps> = () => {
  const {container, listContainer} = styles;
  return (
    <View style={container}>
      <FlatList
        data={News}
        keyExtractor={(items, index) => 'key' + index}
        contentContainerStyle={listContainer}
        renderItem={items => {
          return (
            <ListNews
              id={items.item.id}
              image={items.item.thumbnail}
              title={items.item.title}
              type={items.item.type}
              author={items.item.author}
              views={items.item.views}
              likes={items.item.likes}
              comments={items.item.comments}
              date={items.item.date}
              detail={items.item.detail}
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
  },
  listContainer: {
    paddingBottom: HEIGHT * 0.084,
  },
});

export default NewsItems;
