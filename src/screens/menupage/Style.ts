import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';

export default  StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
    textLogo: {
        fontSize: 30,
        fontFamily: Fonts.bold,
        color: Colors.primary
    },

})