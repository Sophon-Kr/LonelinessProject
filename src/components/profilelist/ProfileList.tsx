import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileList = () => {
    const DATA = [
        {
            id: 0,
            name: "History Order",
            icon: "th-list"
        },
        {
            id: 1,
            name: "Fevorite",
            icon: "heartbeat"
        },
        {
            id: 2,
            name: "Wallet",
            icon: "wallet"
        },
        {
            id: 3,
            name: "Address",
            icon: "map-marker-alt"
        },
        {
            id: 4,
            name: "App Setting",
            icon: "tools"
        },
        {
            id: 5,
            name: "Help",
            icon: "info-circle"
        },

    ]



    const renderItem = (item) => {
        return (

            <TouchableOpacity
                key={item.id}
                onPress={
                    () => {
                        // alert('Profile setting')
                    }}>
                <View style={Style.listContainer}>
                    <View style={Style.innerListContainer}>
                        <FontAwesome5 style={Style.settingIcon} name={item.icon} />
                        <Text style={Style.textSettingList}>{item.name}</Text>
                    </View>
                    <FontAwesome5 style={Style.settingIcon} name={'angle-right'} />
                </View>

            </TouchableOpacity>


        )
    }
    return (
        <View style={Style.rootContainer}>
            {DATA.map((item) =>
                renderItem(item)
            )}
        </View>
    )
}


export default ProfileList