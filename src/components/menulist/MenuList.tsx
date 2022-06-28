import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Style from './Style'
const MenuList = () => {
    const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const renderItem = () => {
        return (
            <View style={Style.listContainer}>
                <Text>MenuList</Text>
            </View>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        // extraData={selectedId}
        />
        // <View style={Style.rootContainer}>
        //     <View style={Style.listContainer}>
        //         <Text>MenuList</Text>
        //     </View>
        //     <View style={Style.listContainer}>
        //         <Text>MenuList</Text>
        //     </View>
        //     <View style={Style.listContainer}>
        //         <Text>MenuList</Text>
        //     </View>
        // </View>

    )
}

export default MenuList