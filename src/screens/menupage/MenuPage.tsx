import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
import TopBarMenu from '../../components/topbarmenu/TopBarMenu'
import SearchField from '../../components/search/SearchField'
import MenuListCategory from '../../components/menulistcategory/MenuListCategory'

const MenuPage = () => {

    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <SearchField />
            <TopBarMenu />
            <MenuListCategory />
        </View>
    );
};

export default MenuPage;