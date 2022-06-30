import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'

const TopBarMenu = () => {
    const [activeButton, setActiveButton] = React.useState(0)

    const categoryList = [
        {
            id: 0,
            label: "All"
        },
        {
            id: 1,
            label: "Top of Week"
        },
        {
            id: 2,
            label: "Soup"
        },
        {
            id: 3,
            label: "Salad"
        },
        {
            id: 4,
            label: "Sea Food"
        },
        {
            id: 5,
            label: "Dessert"
        },
        {
            id: 6,
            label: "Beverage"
        },
    ]

    // React.useEffect(() => { console.log(activeButton) }
    //     , [activeButton])

    const rederMenuList = () => categoryList.map((data) => {
        return (
            <TouchableOpacity
                key={data.id}
                style={activeButton == data.id ? Style.activeButtonMenu : Style.buttonMenu}
                onPress={() => setActiveButton(data.id)}
            >
                <Text style={Style.buttonText}>{data.label}</Text>
            </TouchableOpacity>
        )
    });

    return (
        <View style={Style.rootContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {rederMenuList()}
            </ScrollView>
        </View>
    )
}

export default TopBarMenu