import React from 'react';
import Icon from '../Icon/Icon';

const TabIcon = ({icon, color, size}) => (
  <Icon
    source={icon}
    resizeMode="contain"
    style={{
      width: size,
      height: size,
      tintColor: color,
    }}
  />
);

export default TabIcon;
