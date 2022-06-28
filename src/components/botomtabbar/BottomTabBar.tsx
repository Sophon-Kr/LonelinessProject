import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, TouchableOpacity, LinearGradient } from 'react-native';
import Style from '../../components/botomtabbar/Style'

const BottomTabBar = ({ state, descriptors, navigation }) => {
    const cartBadge = "99+";
    return (
        <View style={Style.rootBarContainer} >
            <View style={Style.seperate}></View>
            <View style={Style.barContainer}>

                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (

                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={Style.warpBar}

                        >
                            {(index == 2 && cartBadge != 0) ?
                                <View style={Style.badgeContainer}>
                                    <Text style={Style.badge}>{cartBadge}</Text>
                                </View> : null}


                            <FontAwesome5
                                style={isFocused ? [Style.iconSizeFocus, Style.buttonStyle] : [Style.iconSizeUnfocus, Style.buttonStyle]}
                                name={
                                    index == 0 ? 'home'
                                        : index == 1 ? 'book-open'
                                            : index == 2 ? 'shopping-cart'
                                                : index == 3 ? 'user-alt'
                                                    : null
                                } />
                            <Text style={isFocused ? Style.textIconFocus : Style.textIconUnfocus}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>

    );

}

export default BottomTabBar