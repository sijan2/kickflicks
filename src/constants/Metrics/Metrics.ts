import {Platform} from 'react-native';
import {HEIGHT, WIDTH, scaleFontSize} from '../../utils/Dimensions';

const Metrics = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,
  large: 40,
  big: 32,
  small: 24,

  s5: 5,
  s8: 8,
  s10: 10,
  s16: 16,
  s20: 20,
  s30: 30,
  s40: 40,
  s50: 50,
  s60: 60,

  // font sizes
  h1: scaleFontSize(30),
  h2: scaleFontSize(24),
  h3: scaleFontSize(20),
  h4: scaleFontSize(16),
  h5: scaleFontSize(14),
  h6: scaleFontSize(13),
  body1: scaleFontSize(30),
  body2: scaleFontSize(22),
  body3: scaleFontSize(16),
  body4: scaleFontSize(14),
  body5: scaleFontSize(13),
  body6: scaleFontSize(12),

  borderWidth: 0.4,

  horizontalLineHeight: 1,

  screenWidth: WIDTH < HEIGHT ? WIDTH : HEIGHT,
  screenHeight: WIDTH < HEIGHT ? HEIGHT : WIDTH,
  drawerWidth: (4 / 5) * WIDTH,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  buttonRadius: 4,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default Metrics;
