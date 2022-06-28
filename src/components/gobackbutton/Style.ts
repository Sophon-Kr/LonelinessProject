import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'


export default StyleSheet.create({
    backIcon: {
        color: Colors.white,
        fontSize: 25,
        fontFamily: Fonts.regular
    },
    backIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        justifyItem: "center",
        padding: 5,
    }

});



