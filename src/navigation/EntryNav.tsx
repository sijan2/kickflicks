import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from '@navigation/BottomTab/BottomTab';

interface IProps {}

/**
 * @author
 * @function @Hello
 **/

const EntryNav: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default EntryNav;
