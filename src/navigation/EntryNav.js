import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTab/BottomTab';

const EntryNav = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default EntryNav;
