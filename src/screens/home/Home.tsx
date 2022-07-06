import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import Style from './Style';

import Colors from '../../assets/colors/Colors'
import SearchField from '../../components/search/SearchField'
import Location from '../../components/location/Location'
import Promotion from '../../components/promotion/Promotion'
import MenuList from '../../components/menulist/MenuList'
import MenuModal from '../../components/menumodal/MenuModal'




const Home = (props: any) => {
   

    


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
            < MenuModal />
        </View>

    );
};

export default Home;




