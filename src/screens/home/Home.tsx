import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Style from './Style';
import Colors from '../../assets/colors/Colors'
import SearchField from '../../components/search/SearchField'
import Location from '../../components/location/Location'
import Promotion from '../../components/promotion/Promotion'
import MenuList from '../../components/menulist/MenuList'

const Home = () => {
    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <SearchField />
                <Location />
                <Promotion />
                <View>
                    <Text style={Style.textLogo}>Top of Week</Text>
                </View>
                <MenuList /></ScrollView>

        </View>
    );
};

export default Home;
