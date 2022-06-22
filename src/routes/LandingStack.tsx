import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteNames from "./RouteNames";

const LandingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Landing.landingPage.routeName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={RouteNames.Landing.landingPage.routeName}
        component={RouteNames.Landing.landingPage.component}
      /> 
       <Stack.Screen
        name={RouteNames.Login.loginOptions.routeName}
        component={RouteNames.Login.loginOptions.component}
      /> 
       <Stack.Screen
        name={RouteNames.Login.SignIn.routeName}
        component={RouteNames.Login.SignIn.component}
      />
      <Stack.Screen
        name={RouteNames.Login.SignUp.routeName}
        component={RouteNames.Login.SignUp.component}
      />
    </Stack.Navigator>
  )
}

export default LandingStack