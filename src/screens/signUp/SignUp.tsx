import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Style from './Style';
import Images from '../../assets/images/Images'
import Colors from '../../assets/colors/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUp = (props: any) => {
    const { navigation } = props
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();

    const handleSignUp = () => {
        console.log(email, password, confirmPassword)
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
    function SignUpForm() {
        return (
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
                <Text style={Style.textFieldDescription}>Confirm Password</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setConfirmPassword(data)}
                    placeholder="confirm password"
                    placeholderTextColor={Colors.white}
                    value={confirmPassword}
                />
                <Text style={Style.textFieldDescription}>First Name</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setConfirmPassword(data)}
                    placeholder="first name"
                    placeholderTextColor={Colors.white}
                    value={confirmPassword}
                />
                <Text style={Style.textFieldDescription}>Last Name</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setConfirmPassword(data)}
                    placeholder="last name"
                    placeholderTextColor={Colors.white}
                    value={confirmPassword}
                />
                <Text style={Style.textFieldDescription}>Date of Birth</Text>
                <TextInput
                    style={Style.inputField}
                    onChangeText={(data) => setConfirmPassword(data)}
                    placeholder="01/01/2022"
                    placeholderTextColor={Colors.white}
                    value={confirmPassword}
                />
                <TouchableOpacity
                    style={[Style.button, Style.signUpButton]}
                    onPress={handleSignUp}
                >
                    <Text style={[Style.textButton, Style.signUpTextColour]}>SignUp</Text>
                </TouchableOpacity>
                <Text style={Style.textFieldDescription}>SignIn</Text>
            </View>
        );
    };

    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            {goBackNavigate()}
            <ScrollView>
                <View style={Style.textContainer}>
                    <Image source={Images.icons.Login.cookingIcon} style={Style.logoImg}></Image>
                    <Text style={Style.textLogo}>I'm Hungry</Text>
                </View>
                {SignUpForm()}
            </ScrollView>
        </View>
    );
};

export default SignUp;
