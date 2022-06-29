import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CartList = () => {
    return (
        <View style={Style.rootContainer}>
            <View style={Style.listContainer}>
                <View>
                    <Image source={Images.images.home.noodle} style={Style.imageSize} />
                </View>
                <View style={Style.menuDetailContainer}>
                    <Text style={Style.textMenu}>Spicy Red Beef  Noodle</Text>
                    <View style={Style.priceDetailContainer}>
                        <View
                            style={Style.priceButtonContainer}
                        >
                            <TouchableOpacity
                                style={[Style.iconContainer, Style.buttonDecreaseColor]}
                                onPress={() => {
                                    alert('decrease --')
                                }}>
                                <FontAwesome5 style={Style.roundIcon} name={'minus'} />
                            </TouchableOpacity>
                            <Text style={Style.textCount}>3</Text>
                            <TouchableOpacity
                                style={[Style.iconContainer, Style.buttonIncreaseColor]}
                                onPress={() => {
                                    alert('Increase ++')
                                }}>
                                <FontAwesome5 style={Style.roundIcon} name={'plus'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={Style.textPrice}>150 ฿</Text>
                        </View>

                    </View>

                </View>
            </View>
            <View style={Style.seperate}></View>
        </View>

    )
}



export default CartList