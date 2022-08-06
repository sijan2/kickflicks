import React, {FC} from 'react';
import {carouseldata} from '../../mock/CarouselDummy';
import Carousel from '../Carousel/Carousel';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @HighlightedNews
 **/

const HighlightedNews: FC<IProps> = () => {
  return <Carousel data={carouseldata} />;
};

export default HighlightedNews;
