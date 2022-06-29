import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images'

const MenuList = () => {
    const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const renderItem = () => {
        return (
            <View style={Style.listContainer}>
                <View>
                    <Image source={Images.images.home.noodle} style={Style.imageSize} />
                </View>

                <View style={Style.textContainer}>
                    <Text style={Style.textMenu}>Beef Noodle</Text>
                    <Text style={Style.textPrice}>150 ฿</Text>
                </View>

            </View>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}

        />
    )
}

export default MenuList