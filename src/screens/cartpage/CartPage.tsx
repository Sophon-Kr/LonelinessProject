import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';


const CartPage = () => {

    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <View style={Style.textContainer}>
                <Text style={Style.textLogo}>CartPage</Text>
            </View>
        </View>
    );
};

export default CartPage;