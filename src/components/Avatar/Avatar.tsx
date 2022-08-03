import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components-react-native';
import {Metrics} from '@constants/Index';

const McAvatar = ({source, size, ...rest}: any) => {
  return <Image source={source} size={size} {...rest} />;
};

McAvatar.propTypes = {
  source: PropTypes.number.isRequired,
  size: PropTypes.number,
  onPress: PropTypes.func,
};

McAvatar.defaultProps = {
  size: Metrics.images.medium,
};

const Image = styled.Image`
  width: ${(props: {size: any}) => props.size || Metrics.images.medium}px;
  height: ${(props: {size: any}) => props.size || Metrics.images.medium}px;
  border-radius: ${(props: {round: any; size: any}) =>
    props.round
      ? props.size
        ? `${props.size}px`
        : `${Metrics.images.medium}px`
      : '0px'};
`;

export default McAvatar;
