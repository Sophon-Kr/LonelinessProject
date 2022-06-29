import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Style from './Style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Location = () => {
    return (
        <View style={Style.rootContainer}>
            <View style={Style.editPlaceContainer}>
                <Text style={Style.placeText}>Delivery to Home</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert("Edit default address")
                    }}>
                    <FontAwesome5 style={Style.rightArrowIcon} name={'angle-right'} />
                </TouchableOpacity>

            </View>
            <Text style={Style.addressText}>Bangkok Street no.14 Silom</Text>
            <TouchableOpacity
                onPress={() => {
                    alert("Distans")
                }}>
                <Text style={Style.distansText}>2.4 km</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Location