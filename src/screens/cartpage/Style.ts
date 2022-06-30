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
        justifyContent: 'flex-start',
        backgroundColor: Colors.black,
        padding: wp('5%'),
        paddingTop: wp('-5%')
    },
    textTitle: {
        marginTop: wp('5%'),
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: Colors.white
    },
    textOrder: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: Colors.white
    },
    sumTextOrder: {
        fontSize: 16,
        fontFamily: Fonts.regular,
        color: Colors.white
    },
    totalTextOrder: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: Colors.white
    },
    orderButtonStyle: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginTop: wp('5%'),
        alignItems: 'center',

    },
    outerbillDetailContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: wp('5%')
    },
    innerbillDetailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})