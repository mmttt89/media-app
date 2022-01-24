import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { AppTouch, AppText } from "@components/index"

const SIZE = 40;
const AppProfileHeaderSmall = ({ data, showContent = false, content, ...props }) =>
   <AppTouch
      style={[styles.post_header_touch, showContent ? { alignItems: "flex-start" } : null]}
   >
      <Image
         source={{ uri: "https://i.picsum.photos/id/176/200/300.jpg?grayscale&hmac=Jdj7SwPo39coGPNTY3C3uRMWWUNWrDo5rOqcS6Gwgf0" }}
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
                  data?.user?.name + " "
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
