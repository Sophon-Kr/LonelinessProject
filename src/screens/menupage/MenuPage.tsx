import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';


const MenuPage = () => {
   
    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <View style={Style.textContainer}>
                <Text style={Style.textLogo}>MenuPage</Text>
            </View>
        </View>
    );
};

export default MenuPage;