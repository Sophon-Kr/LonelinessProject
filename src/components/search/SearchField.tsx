import { View, Text, TextInput } from 'react-native'
import React, { useState } from "react";
import Style from './Style'
import Colors from '../../assets/colors/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function SearchField() {
    const [search, setSearch] = useState();
    return (
        <View style={Style.containerSearchField}>
            <FontAwesome5 name='search' style={Style.searchIcon} />
            <TextInput
                style={Style.searchField}
                onChangeText={(data) => setSearch(data)}
                placeholder="Search"
                placeholderTextColor={Colors.white}
                value={search}
            />
        </View>
    )
}