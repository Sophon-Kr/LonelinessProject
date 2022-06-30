import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images'

const MenuList = () => {
    const DATA = [
        {
            id: 0,
            name: "Chicken Fillet",
            img: Images.images.home.chickenFilletFull,
            price: "150฿"
        },
        {
            id: 1,
            name: "Cabbage Kimchi",
            img: Images.images.home.kimchi,
            price: "120฿"
        },
        {
            id: 2,
            name: "Soup Beef Noodle",
            img: Images.images.home.noodle,
            price: "130฿"
        },
        {
            id: 3,
            name: "Stir Fry Chicken",
            img: Images.images.home.stirFryChicken,
            price: "200฿"
        },
        {
            id: 4,
            name: "Strew Beef",
            img: Images.images.home.strewBeef,
            price: "250฿"
        },
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={Style.listContainer}>
                <View>
                    <Image source={item.img} style={Style.imageSize} />
                </View>

                <View style={Style.textContainer}>
                    <Text style={Style.textMenu}>{item.name}</Text>
                    <Text style={Style.textPrice}>{item.price}</Text>
                </View>

            </View>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default MenuList