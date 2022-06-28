import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../gobackbutton/Style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const GoBackButton = (props: any) => {
    const { navigation } = props;

    return (
        <View style={Style.backIconContainer}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}>
                <FontAwesome5 style={Style.backIcon} name={'angle-left'} />
            </TouchableOpacity>
        </View>
    )
}

export default GoBackButton