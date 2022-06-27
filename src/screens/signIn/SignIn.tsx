import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from "react";
import * as actions from "../../middleware/action";
import { connect } from 'react-redux'
import Style from './Style';
import Images from '../../assets/images/Images'
import Colors from '../../assets/colors/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const SignIn = (props: any) => {
    const { navigation } = props;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSignIn = () => {
        props.changeLoginStatus(true)
        console.log(email, password)
    }
    const goBackNavigate = () => {
        return (
            <View style={Style.backIconContainer}>
                <Text style={Style.backIconSize}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <FontAwesome5 style={Style.backIcon} name={'angle-left'} />;
                </Text>
            </View>
        )
    }


    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            {goBackNavigate()}
            <View style={Style.textContainer}>
                <Image source={Images.icons.Login.cookingIcon} style={Style.logoImg}></Image>
                <Text style={Style.textLogo}>I'm Hungry</Text>
            </View>
            <View style={Style.buttonContaioner}>
                <Text style={Style.textFieldDescription}>Email</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setEmail(data)}
                    placeholder="example@mail.com"
                    placeholderTextColor={Colors.white}
                    value={email}
                />
                <Text style={Style.textFieldDescription}>Password</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setPassword(data)}
                    placeholder="password"
                    placeholderTextColor={Colors.white}
                    value={password}
                />
                <TouchableOpacity
                    style={[Style.button, Style.signInButton]}
                    onPress={handleSignIn}
                >
                    <Text style={[Style.textButton, Style.signInTextColour]}>SignIn</Text>

                </TouchableOpacity>
                <Text style={Style.textFieldDescription}>SignUp</Text>
            </View>
        </View>
    );
};






const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoginStatus: (status) => {
            return dispatch(actions.changeLoginStatus(status));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)