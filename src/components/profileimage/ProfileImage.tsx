import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ProfileImage = () => {
    return (
        <View style={Style.rootContainer}>
            <View>
                <Image source={Images.images.profile.taylor} style={Style.imageSize} />
                <View style={Style.iconContainer}>
                    <TouchableOpacity onPress={
                        () => {
                            // alert('Profile setting')
                        }}>
                        <FontAwesome5 style={Style.settingIcon} name={'cog'} />
                    </TouchableOpacity>

                </View>

            </View>

            <Text style={Style.textProfileName}>Taylor Swift</Text>
            <Text style={Style.textProfileEmail}>taylor.swift@gmail.com</Text>
        </View>
    )
}

export default ProfileImage