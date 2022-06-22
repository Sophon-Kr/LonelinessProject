import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
import Images from '../../assets/images/Images'
import Colors from '../../assets/colors/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign';



const SignIn = (props: any) => {
    const { navigation } = props;
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSignIn = () => {
        console.log(email, password)
    }
    const goBackNavigate = () => {
        return (
            <View style={Style.backIconContainer}>
                <Text style={Style.backIconSize} 
                onPress={() => {
                    navigation.goBack();
                }}>
                    <AntDesign style={Style.backIcon} name={'left'} />;
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

export default SignIn;
