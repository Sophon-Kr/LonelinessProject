import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from "../../middleware/action";
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images'


const MenuList = (props: any) => {
    const handleModal = () => {
        // console.log("changeVisibleStatus : ", props.visibleModal)
        props.changeVisibleStatus(true)
    }
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
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={handleModal}
            >
                <View style={Style.listContainer}>
                    <View>
                        <Image source={item.img} style={Style.imageSize} />
                    </View>

                    <View style={Style.textContainer}>
                        <Text style={Style.textMenu}>{item.name}</Text>
                        <Text style={Style.textPrice}>{item.price}</Text>
                    </View>

                </View>
            </TouchableOpacity>

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

const mapStateToProps = (state: any) => {
    return {
        visibleModal: state.reducer.visibleModal,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeVisibleStatus: (status: boolean) => {
            return dispatch(actions.changeVisibleStatus(status));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)