import React from 'react';
import { Text, StyleSheet } from 'react-native';
import consts from '@constants/index';
import colors from '@constants/colors';

const AppText = ({ ...props }) => {
  const {
    xlarge,
    large,
    small,
    xsmall,

    bold,
    medium,
    ultraLight,
    light,
    style,
    bright,
    gray,
    link
  } = props;

  let fontStyle = styles.normal;
  if (xlarge) fontStyle = styles.xlarge;
  if (large) fontStyle = styles.large;
  if (small) fontStyle = styles.small;
  if (xsmall) fontStyle = styles.xsmall;

  let fontFamily = consts.FONT_FAMILY_NORMAL;
  if (bold) fontFamily = consts.FONT_FAMILY_BOLD;
  if (medium) fontFamily = consts.FONT_FAMILY_MEDIUM;
  if (light) fontFamily = consts.FONT_FAMILY_LIGHT;
  if (ultraLight) fontFamily = consts.FONT_FAMILY_ULTRALIGHT;

  let color = colors.textDefault;
  if (bright) color = colors.textBright;
  if (gray) color = colors.textGray;
  if (link) color = colors.lightBlue;

  return (
    <Text
      {...props}
      style={[{ fontFamily, color }, fontStyle, style]}
    />
  );
};

export default AppText;

const styles = StyleSheet.create({
  xlarge: {
    fontSize: consts.FONT_SIZE_XLARGE,
  },
  large: {
    fontSize: consts.FONT_SIZE_LARGE,
  },
  normal: {
    fontSize: consts.FONT_SIZE_NORMAL,
  },
  small: {
    fontSize: consts.FONT_SIZE_SMALL,
  },
  xsmall: {
    fontSize: consts.FONT_SIZE_XSMALL,
  },
});
