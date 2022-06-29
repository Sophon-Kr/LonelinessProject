import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "100%",
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 125,
        paddingVertical: wp('5%'),
    },
    seperate: {
        padding: 0.5,
        backgroundColor: Colors.primary,
        width: "100%"
    },
    menuDetailContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    priceDetailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp('5%')
    },
    priceButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageSize: {
        width: 130,
        height: 90,
        borderRadius: 10,
        marginRight: 20
    },
    textMenu: {
        fontFamily: Fonts.bold,
        fontSize: 18,
        color: Colors.white,
    },
    textPrice: {
        fontFamily: Fonts.regular,
        fontSize: 20,
        color: Colors.primary,
    },
    textCount: {
        fontFamily: Fonts.regular,
        fontSize: 25,
        color: Colors.white,
        paddingHorizontal: 10
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        borderRadius: 25,
    },

    roundIcon: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        color: Colors.black,
    },
    buttonIncreaseColor: {
        backgroundColor: "lightgreen",

    },
    buttonDecreaseColor: {
        backgroundColor: "lightgrey",

    }
})