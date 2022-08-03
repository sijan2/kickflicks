import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabStacks from './TabStack/TabStack';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabStacks />
    </NavigationContainer>
  );
}
