import React, { useState, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import consts from '@constants/index';
import colors from '@constants/colors';

const AppText = ({ showAllCaption = false, ...props }) => {
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
      link,
      numberOfLines = 2
   } = props;

   const [isShowText, setIsShowText] = useState(showAllCaption);
   const [isMore, setIsMore] = useState(false);

   const _onTextLayout = useCallback(e => {
      setIsMore(e.nativeEvent.lines.length >= numberOfLines)
   }, []);  

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
      <>
         <Text
            onTextLayout={!isShowText ? _onTextLayout : null}
            numberOfLines={isShowText ? undefined : numberOfLines}
            {...props}
            style={[{ fontFamily, color }, fontStyle, style]}
         >
            {
               props.children
            }
         </Text>
         {
            isMore && !isShowText ?
               <AppText
                  bold
                  onPress={() => setIsShowText(true)}
                  style={{ lineHeight: 21, marginTop: 5 }}>
                  more
               </AppText>
               : null
         }
      </>
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
