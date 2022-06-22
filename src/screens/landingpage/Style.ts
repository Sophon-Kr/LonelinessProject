import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts'
import Colors from '../../assets/colors/Colors'
import { widthPercentageToDP as wp } from '../../assets/sizes/Sizes';
import { heightPercentageToDP as hp } from '../../assets/sizes/Sizes';


export default StyleSheet.create({
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
  textDetail: {
    fontSize: 20,
    fontFamily: Fonts.regular,
    color: Colors.primary
  },
  textContainer: {
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImg: {
    width: wp('100%'),
    height: hp('100%'),
    opacity: 0.3,
  },
  logoImg: {
    width: wp('30%'),
    height: wp('30%'),

  }


});
