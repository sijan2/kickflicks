import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {News} from '../../mock/Dummy';
import ListNews from '../ListNews/ListNews';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @NewsItems
 **/

const NewsItems: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={News}
        keyExtractor={(items, index) => 'key' + index}
        renderItem={items => {
          return (
            <ListNews
              id={items.item.id}
              thumbnail={items.item.thumbnail}
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
});

export default NewsItems;
