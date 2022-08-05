import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

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
  const {container} = styles;
  return (
    <TouchableOpacity>
      <View>
        <Image source={thumbnail} />
        <Text>{title}</Text>
        <Text>{views}</Text>
        <Text>{author.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListNews;
