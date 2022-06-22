// export const fontType = (fonts: string) => {
//   switch (fonts) {
//     case 'regular':
//       return Fonts.DB_Heavent;
//     case 'bold':
//       return Fonts.DB_Heavent_Bd;
//   }
// };

import { Platform } from 'react-native';

export default {
  regular: Platform.OS == 'ios' ? 'Kanit-Regular' : 'Kanit-Regular',
  bold: Platform.OS == 'ios' ? 'Kanit-Bold' : 'Kanit-Bold',
  boldItalic: Platform.OS == 'ios' ? 'Kanit-BoldItalic' : 'Kanit-BoldItalic',
  black: Platform.OS == 'ios' ? 'Kanit-Black' : 'Kanit-Black',
  blackItalic: Platform.OS == 'ios' ? 'Kanit-BlackItalic' : 'Kanit-BlackItalic',
  medium: Platform.OS == 'ios' ? 'Kanit-Medium' : 'Kanit-Medium',
  mediumItalic:
    Platform.OS == 'ios' ? 'Kanit-MediumItalic' : 'Kanit-MediumItalic',
  light: Platform.OS == 'ios' ? 'Kanit-Light' : 'Kanit-Light',
  lightItalic: Platform.OS == 'ios' ? 'Kanit-LightItalic' : 'Kanit-LightItalic',
  thin: Platform.OS == 'ios' ? 'Kanit-Thin' : 'Kanit-Thin',
  thinItalic: Platform.OS == 'ios' ? 'Kanit-ThinItalic' : 'Kanit-ThinItalic',
};
