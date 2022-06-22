import { View, Text, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Style from './Style';
import Images from '../../assets/images/Images'

const LandingPage = (props: any) => {
  const { navigation } = props;

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("loginOptions")
    }, 2000)
  }, [])


  return (
    <View style={[Style.safeArea, Style.rootContainer]}>
      <ImageBackground source={Images.backgroundImages.landingPage.landingBackground} style={Style.backgroundImg} blurRadius={4}
      ></ImageBackground>

      <View style={Style.textContainer}>
        <Image source={Images.icons.Login.cookingIcon} style={Style.logoImg}></Image>
        <Text style={Style.textLogo}>I'm Hungry</Text>

      </View>

    </View>
  );
};

export default LandingPage;
