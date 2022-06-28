import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';
// import { heightPercentageToDP as hp } from '../../assets/sizes/Sizes';


export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: Colors.black,
        padding: wp('5%')
    },
    textLogo: {
        fontSize: 16,
        fontFamily: Fonts.bold,
        color: Colors.white,
        marginTop: wp('5%'),
    },
    // textContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     alignItems: 'flex-start',
    // }

});
