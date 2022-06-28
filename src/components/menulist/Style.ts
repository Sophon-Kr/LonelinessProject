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
        // gap: 30,
        // width: 700
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        borderRadius: 10,
        height: 180,
        width: 150,
        padding: 10,
        marginTop: wp('5%'),
        marginRight: wp('5%'),
    }
})