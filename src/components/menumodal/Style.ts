import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    modalContainer: {
        height: '91%',
        marginTop: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.grey,
        // borderWidth: 2,
        // borderTopColor: Colors.primary,
        // borderLeftColor: Colors.primary,
        // borderRightColor: Colors.primary
    },
    rootContainer: {
        paddingHorizontal: wp('5%'),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: "red"
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    closeButton: {
        zIndex: 11,
        width: "100%",
        height: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7
    },
    closeButtonText: {
        fontFamily: Fonts.regular,
        color: Colors.white,
        fontSize: 22,
    },
    imageSize: {
        width: "100%",
        height: 250,
        borderRadius: 10,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 5
    },
    innerTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1

    },
    titleMenuText: {
        fontFamily: Fonts.bold,
        color: Colors.white,
        fontSize: 22,
    },
    titleCatagoryMenuText: {
        fontFamily: Fonts.regular,
        color: Colors.white,
        fontSize: 19,
    },
    favoriteIcon: {
        fontFamily: Fonts.regular,
        fontSize: 35,
        color: "red"
    },
    amountContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%"
        // backgroundColor: "red"

    },
    increaseIcon: {
        fontFamily: Fonts.regular,
        fontSize: 25,
        color: Colors.primary,
    },
    decreaseIcon: {
        fontFamily: Fonts.regular,
        fontSize: 25,
        color: Colors.black,
    },
    amountText: {
        fontFamily: Fonts.bold,
        color: Colors.white,
        fontSize: 28,
    },
})