import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';


export default StyleSheet.create({
    rootBarContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    barContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    warpBar: {
        flex: 1,
        alignItems: "center",

    },
    iconContainer: {
        padding: 10
    },
    iconSizeFocus: {
        color: Colors.primary,
        fontSize: 22,
        fontFamily: Fonts.regular
    },
    iconSizeUnfocus: {
        color: Colors.white,
        fontSize: 22,
        fontFamily: Fonts.regular
    },
    textIconFocus: {
        color: Colors.primary,
        fontSize: 14,
        fontFamily: Fonts.regular
    },
    textIconUnfocus: {
        color: Colors.white,
        fontSize: 14,
        fontFamily: Fonts.regular
    },
    buttonStyle: {
        padding: 6,
    },
    seperate: {
        flex: 1,
        backgroundColor: Colors.primary,
        width: wp('100%'),
        padding: 0.3
    }

});
