import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteNames from "./RouteNames";

const Logined = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={RouteNames.Home.home.routeName}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={RouteNames.Home.home.routeName}
                component={RouteNames.Home.home.component}
            />
        </Stack.Navigator>
    )
}

export default Logined