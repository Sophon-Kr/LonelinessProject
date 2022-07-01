import { View, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Style from './Style';
import ProfileImage from '../../components/profileimage/ProfileImage'
import ProfileList from '../../components/profilelist/ProfileList'

const ProfilePage = () => {
    const logOutButton = () => {
        return (
            <TouchableOpacity
                style={[Style.lougoutButton]}
            // onPress={handleSignIn}
            >
                <Text style={[Style.textButton]}>Sign Out</Text>

            </TouchableOpacity>
        )
    }
    return (
        <View style={[Style.safeArea, Style.rootContainer]}>
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <ProfileImage />
                <ProfileList />
                {logOutButton()}
            </ScrollView>

        </View>
    );
};

export default ProfilePage;