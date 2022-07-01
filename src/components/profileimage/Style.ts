import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    textProfileName: {
        fontSize: 25,
        fontFamily: Fonts.bold,
        color: Colors.white
    },
    textProfileEmail: {
        fontSize: 18,
        fontFamily: Fonts.regular,
        color: Colors.white
    },
    imageSize: {
        width: 120,
        height: 120,
        borderRadius: 120,
        borderWidth: 4,
        borderColor: Colors.grey
    },
    settingIcon: {

        fontSize: 25,
        fontFamily: Fonts.bold,
        color: Colors.white,


    },
    iconContainer: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: Colors.grey,
        marginLeft: 80,
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})