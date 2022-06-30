import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Style from './Style';
import Location from '../../components/location/Location'
import CartList from '../../components/cartlist/CartList'

const CartPage = () => {

    function orderButton() {
        return (
            <View>
                <TouchableOpacity style={Style.orderButtonStyle}>
                    <Text style={Style.textOrder}>
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    function summayBillDetail() {
        return (
            <View style={Style.outerbillDetailContainer}>
                <View style={Style.innerbillDetailContainer}>
                    <Text style={Style.sumTextOrder}>
                        Total Sales(Exc.Tax)
                    </Text>
                    <Text style={Style.sumTextOrder}>
                        THB 200
                    </Text>
                </View>
                <View style={Style.innerbillDetailContainer}>
                    <Text style={Style.sumTextOrder}>
                        VAT(7%)
                    </Text>
                    <Text style={Style.sumTextOrder}>
                        THB 14
                    </Text>
                </View>
                <View style={Style.innerbillDetailContainer}>
                    <Text style={Style.totalTextOrder}>
                        Total
                    </Text>
                    <Text style={Style.totalTextOrder}>
                        THB 214
                    </Text>
                </View>
            </View>

        )
    }

    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Location />
                <View >
                    <Text style={Style.textTitle}>Order  List</Text>
                </View>
                <CartList />
                <CartList />
                <CartList />
                {summayBillDetail()}
                {orderButton()}
            </ScrollView>
        </View>
    );
};

export default CartPage;