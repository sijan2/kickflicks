import {HEIGHT, WIDTH, scaleFontSize} from '@utils/Dimensions';

const CUSTOMFONT_REGULAR = 'Sans-Regular';
const CUSTOMFONT_BOLD = 'Sans-Bold';

export const COLORS = {
  default: '#FFFFFF',
  primary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  tabBar: '#121212',
  input: '#1D1D1D',
  blue: '#4096FE',
  gray: '#878787',
  gray1: '#666666',
  lightGray: '#dedede',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  linear: ['#439DFEE8', '#F687FFE8'],
};
export const SIZES = {
  // global sizes
  base: '8px',
  font: '14px',
  radius: '20px',
  padding: '30px',
  small: '24px',
  big: '32px',

  // font sizes
  large: scaleFontSize(40),
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

  // app dimensions
  WIDTH,
  HEIGHT,
};
export const FONTS = {
  large: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.large,
    lineHeight: '40px',
  },
  small: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.small,
    lineHeight: '22px',
  },
  h1: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h1, lineHeight: '36px'},
  h2: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h2, lineHeight: '30px'},
  h3: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h3, lineHeight: '22px'},
  h4: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h4, lineHeight: '22px'},
  h5: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h5, lineHeight: '22px'},
  h6: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h6, lineHeight: '22px'},
  body1: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body1,
    lineHeight: '36px',
  },
  body2: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body2,
    lineHeight: '30px',
  },
  body3: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body3,
    lineHeight: '25px',
  },
  body4: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body4,
    lineHeight: '22px',
  },
  body5: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body5,
    lineHeight: '22px',
  },
  body6: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body6,
    lineHeight: '22px',
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
