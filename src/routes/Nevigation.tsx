import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import LandingStack from './LandingStack';
import LoginedStack from './LoggedinStack'

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <LandingStack />
        {/* <LoginedStack /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
