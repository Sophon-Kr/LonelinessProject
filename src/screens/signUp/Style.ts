import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';


export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
    textLogo: {
        fontSize: 30,
        fontFamily: Fonts.bold,
        color: Colors.primary
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        marginTop: wp('10%'),
        width: wp('30%'),
        height: wp('30%'),
    },
    buttonContaioner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: wp('90%'),
        margin: wp('5%'),
    },
    button: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },

    signUpButton: {
        marginTop: wp('5%'),
        color: Colors.primary,
        backgroundColor: Colors.white
    },
    textButton: {
        fontSize: 20,
        fontFamily: Fonts.bold
    },
    signUpTextColour: {
        color: Colors.primary,

    },

    inputField: {
        padding: 15,
        marginTop: 5,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: Colors.primary,
        color: Colors.white,
        fontSize: 16,
        fontFamily: Fonts.regular,
        backgroundColor: Colors.background
    },
    textFieldDescription: {
        marginTop: 15,
        fontSize: 16,
        fontFamily: Fonts.regular,
        color: Colors.primary,
    },
    backIcon: {
        color: Colors.white, 
        fontSize: 20,
        fontFamily:Fonts.bold
    },
    backIconSize: {
        flexGrow: 1
    },
    backIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15
    }
});
