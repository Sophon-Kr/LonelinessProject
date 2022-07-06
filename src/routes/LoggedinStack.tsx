import React from 'react';
import RouteNames from "./RouteNames";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/botomtabbar/BottomTabBar'
import { View, Dimensions, } from 'react-native'
import HeaderTop from '../components/headertop/HeaderTop'

const Logined = (props: any) => {
    const Tab = createBottomTabNavigator();
    const { width, height } = Dimensions.get("window")

    return (
        <View style={{
            width,
            height,
        }}>
            <Tab.Navigator
                initialRouteName={RouteNames.Home.home.routeName}
                screenOptions={{
                    headerShown: true,
                    tabBarHideOnKeyboard: true

                }}
                tabBar={(props) => <BottomTabBar  {...props} />}


            >
                <Tab.Screen
                    options={{
                        header: (props) => <HeaderTop title={RouteNames.Home.home.routeName} {...props} />
                    }}
                    name={RouteNames.Home.home.routeName}
                    component={RouteNames.Home.home.component}
                />
                <Tab.Screen
                    options={{
                        header: (props) => <HeaderTop title={RouteNames.Menu.menu.routeName} {...props} />
                    }}
                    name={RouteNames.Menu.menu.routeName}
                    component={RouteNames.Menu.menu.component}
                />
                <Tab.Screen
                    options={{
                        header: (props) => <HeaderTop title={RouteNames.Cart.cart.routeName} {...props} />
                    }}
                    name={RouteNames.Cart.cart.routeName}
                    component={RouteNames.Cart.cart.component}
                />
                <Tab.Screen
                    options={{
                        header: (props) => <HeaderTop title={RouteNames.Profile.profile.routeName} {...props} />
                    }}
                    name={RouteNames.Profile.profile.routeName}
                    component={RouteNames.Profile.profile.component}
                />
            </Tab.Navigator>
        </View >

    )
}

export default Logined

