import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: Colors.grey,
        borderRadius: 10,
        padding: 20,
        width: "100%",
        marginTop: wp('5%'),
        minHeight: 100,

    },
    editPlaceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeText: {
        fontFamily: Fonts.regular,
        fontSize: 20,
        color: Colors.white,
        flex: 1
    },
    addressText: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: Colors.white
    },
    distansText: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        color: Colors.black,
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 6
    },
    rightArrowIcon: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        fontSize: 25,

    },

})