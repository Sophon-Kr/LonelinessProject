import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        borderRadius: 10,
        padding: 20,
        width: "100%",
        marginTop: wp('5%'),
        minHeight: 150
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    imageContainer: {
        maxHeight: 150,
        maxWidth: 150
    },
    titleText: {
        fontFamily: Fonts.regular,
        fontSize: 24,
        color: Colors.white,
    },
    discountText: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: Colors.white,
    },
    buttonText: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        color: Colors.black,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 3,
        marginTop: 6
    },
    imageSize: {
        width: 130,
        height: 110
    }


})