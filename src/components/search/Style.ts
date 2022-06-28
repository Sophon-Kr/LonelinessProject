import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    searchField: {
        fontFamily: Fonts.regular,
        color: Colors.white,
        fontSize: 20,
        width: "100%",
    },
    containerSearchField: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        borderRadius: 10,
        padding: 5,
        width: "100%",
    },
    searchIcon: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        fontSize: 15,
        padding: 15
    }
})