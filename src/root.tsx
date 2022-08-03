import React, {FC} from 'react';
import {AppNavigator} from './navigation/Index';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Entry
 **/

const Entry: FC<IProps> = () => {
  return <AppNavigator />;
};

export default Entry;
