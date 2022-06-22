import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
import Images from '../../assets/images/Images'
import Colors from '../../assets/colors/Colors'

const LoginOptions = (props: any) => {
    const { navigation } = props;
    function Optionbutton() {
        return (
            <View style={Style.buttonContaioner}>
                <TouchableOpacity
                    style={[Style.button, Style.signInButton]}
                    onPress={() => {
                        navigation.navigate("signIn");
                    }}
                >
                    <Text style={[Style.textButton, Style.signInTextColour]}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Style.button, Style.signUpButton]}
                    onPress={() => {
                        navigation.navigate("signUp")
                    }}
                >
                    <Text style={[Style.textButton, Style.signUpTextColour]}>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    };



    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <View style={Style.textContainer}>
                <Image source={Images.icons.Login.cookingIcon} style={Style.logoImg}></Image>
                <Text style={Style.textLogo}>I'm Hungry</Text>
            </View>
            {Optionbutton()}
        </View>
    );
};

export default LoginOptions;
