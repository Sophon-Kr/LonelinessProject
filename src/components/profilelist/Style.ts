import { StyleSheet } from 'react-native'
import Colors from '../../assets/colors/Colors'
import Fonts from '../../assets/fonts/Fonts'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes'

export default StyleSheet.create({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: wp('5%'),
    },
    innerListContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.grey,
        borderBottomWidth: 1,
        paddingVertical: wp('4%'),
   
    },
    textSettingList: {
        fontFamily: Fonts.regular,
        fontSize: 20,
        color: Colors.white,
        marginHorizontal: wp('3%'),
    },
    settingIcon: {
        fontSize: 25,
        fontFamily: Fonts.bold,
        color: Colors.white,
    },

})