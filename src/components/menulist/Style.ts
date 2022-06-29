import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        marginTop: wp('5%'),
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        borderRadius: 10,
        height: 180,
        width: 150,
        marginTop: wp('3%'),
        marginRight: wp('5%'),
    },
    imageSize: {
        width: 150,
        height: 110,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMenu: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: Colors.white,
    },
    textPrice: {
        fontFamily: Fonts.regular,
        fontSize: 20,
        color: Colors.primary,
    }
})