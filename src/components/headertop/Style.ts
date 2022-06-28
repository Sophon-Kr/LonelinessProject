import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';


export default StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 10,
        backgroundColor: Colors.black
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: 50,
        backgroundColor: Colors.black,
    },
    innerContainerCenter: {
        position: "absolute",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    seperate: {
        flex: 1,
        backgroundColor: Colors.grey,
        width: "100%",
        padding: 0.5,
    },
    notificationIcon: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: Fonts.regular
    },
    headerFont: {
        fontFamily: Fonts.regular,
        color: Colors.white,
        fontSize: 18,
        width: '100%',
        textAlign: "center",
        position: "absolute"
    },
    blankField: {
        flex: 1
    },
    redDot: {
        padding: 5,
        backgroundColor: "red",
        position: "absolute",
        borderRadius: 5
    }

});
