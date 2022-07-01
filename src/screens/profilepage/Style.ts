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
        alignItems: 'center',
        backgroundColor: Colors.black,
        padding: wp('5%')
    },
    textLogo: {
        fontSize: 30,
        fontFamily: Fonts.bold,
        color: Colors.primary
    },
    lougoutButton: {
        backgroundColor: Colors.white,
        marginTop: wp('5%'),
        padding: 10,
        alignItems: 'center',
        borderRadius: 7

    },
    textButton: {
        fontSize: 20,
        fontFamily: Fonts.bold
    },

})