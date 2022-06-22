import {DarkTheme, DefaultTheme} from '@react-navigation/native';
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(10, 40, 255, 1)',
    background: 'rgba(255, 255, 255, 1)',
    card: 'rgba(10, 40, 255, 1)',
    text: 'rgba(30, 30, 30, 1)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(10, 40, 255, 1)',
    background: 'rgba(255, 255, 255, 1)',
    card: 'rgba(244, 245, 248, 1)',
    text: 'rgba(30, 30, 30, 1)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
