import React from 'react'
import RouteNames from "./RouteNames";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/botomtabbar/BottomTabBar'


const Logined = (props: any) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={RouteNames.Home.home.routeName}
            screenOptions={{
                headerShown: false,

            }}
            tabBar={props => <BottomTabBar  {...props} />}
        >
            <Tab.Screen
                name={RouteNames.Home.home.routeName}
                component={RouteNames.Home.home.component}
            />
            <Tab.Screen
                name={RouteNames.Menu.menu.routeName}
                component={RouteNames.Menu.menu.component}
            />
            <Tab.Screen
                name={RouteNames.Cart.cart.routeName}
                component={RouteNames.Cart.cart.component}
            />
            <Tab.Screen
                name={RouteNames.Profile.profile.routeName}
                component={RouteNames.Profile.profile.component}
            />
        </Tab.Navigator>
    )
}

export default Logined

