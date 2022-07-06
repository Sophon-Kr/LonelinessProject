import { View, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from "react";
import * as actions from "../../middleware/action";
import { connect } from 'react-redux'
import Style from './Style';
import ProfileImage from '../../components/profileimage/ProfileImage'
import ProfileList from '../../components/profilelist/ProfileList'

const ProfilePage = (props: any) => {
    const handleSignOut = () => {
        props.changeLoginStatus(false)
    }
    const logOutButton = () => {
        return (
            <TouchableOpacity
                style={[Style.lougoutButton]}
                onPress={handleSignOut}
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

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLoginStatus: (status: boolean) => {
            return dispatch(actions.changeLoginStatus(status));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
