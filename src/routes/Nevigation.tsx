import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'

import LandingStack from './LandingStack';
import LoggedinStack from './LoggedinStack'

const Navigation = (props: any) => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!props.loginStatus ? <LandingStack /> : <LoggedinStack />}


      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    loginStatus: state.reducer.loginStatus,
  }
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(Navigation)