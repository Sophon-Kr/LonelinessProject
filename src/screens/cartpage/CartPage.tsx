import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
import Location from '../../components/location/Location'
import CartList from '../../components/cartlist/CartList'

const CartPage = () => {

    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <Location />
            <View >
                <Text style={Style.textTitle}>Order  List</Text>
            </View>
            <CartList />
            <CartList />

        </View>
    );
};

export default CartPage;