import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
// import Images from '../../assets/images/Images'
// import Colors from '../../assets/colors/Colors'

const Home = () => {
   
    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <View style={Style.textContainer}>
                
                <Text style={Style.textLogo}>Home</Text>
            </View>
        </View>
    );
};

export default Home;
