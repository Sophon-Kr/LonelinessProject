import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Style from './Style'
import Images from '../../assets/images/Images'

const Promotion = () => {
  return (
    <View style={Style.rootContainer}>
      <View style={Style.innerContainer}>
        <Text style={Style.titleText}>Chicken Fillet</Text>
        <Text style={Style.discountText}>Discount 25%</Text>
        <TouchableOpacity
          onPress={() => {
            alert("Distans")
          }}>
          <Text style={Style.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.innerContainer}>
        <Image source={Images.images.home.chickenFillet} style={Style.imageSize} />


      </View>
    </View>
  )
}

export default Promotion