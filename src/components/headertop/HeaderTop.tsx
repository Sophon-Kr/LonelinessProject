import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GoBackButton from '../gobackbutton/GoBackButton'

const HeaderTop = ({ title }) => {
    return (
        <View style={Style.rootContainer}>
            <View style={Style.innerContainer}>
                <Text style={Style.headerFont}>{title}</Text>
                {/* <GoBackButton /> */}
                <View style={Style.blankField}>
                    <Text style={Style.headerFont}>{" "}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        alert('Notification');
                    }}>
                    <FontAwesome5 style={Style.notificationIcon} name={'bell'} />
                    <View style={Style.redDot}>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={Style.seperate}></View>
        </View>
    )
}

export default HeaderTop