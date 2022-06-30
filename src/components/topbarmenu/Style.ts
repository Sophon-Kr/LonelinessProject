import { StyleSheet } from 'react-native'
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: wp('4%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    buttonMenu: {
        alignItems: 'center',
        paddingHorizontal: wp('4%'),
        paddingVertical: wp('2%'),
    },
    activeButtonMenu: {
        alignItems: 'center',
        paddingHorizontal: wp('4%'),
        paddingVertical: wp('2%'),
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: Fonts.regular,
        color: Colors.white
    }
})