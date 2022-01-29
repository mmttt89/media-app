import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { AppTouch, AppText } from "@components/index"
import FastImage from 'react-native-fast-image'

const SIZE = 40;
const AppProfileHeaderSmall = ({ user, showContent = false, content, ...props }) =>
   <AppTouch
      style={[styles.post_header_touch, showContent ? { alignItems: "flex-start" } : null]}
   >
      <FastImage
         source={{ uri: user?.profile_image.raw }}
         style={{
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2
         }}
      />

      <View>
         <View>
            <AppText
               bold
               style={{ marginHorizontal: 5 }}
            >
               {
                  user?.name + " "
               }
               {
                  showContent ? <AppText showAllCaption={true}>
                     {
                        content
                     }
                  </AppText> : null
               }
            </AppText>
         </View>
      </View>

   </AppTouch>

export default AppProfileHeaderSmall;

const rowStyle = {
   flexDirection: 'row',
   alignItems: 'center'
}
const styles = StyleSheet.create({
   post_header_touch: {
      ...rowStyle
   },
});
