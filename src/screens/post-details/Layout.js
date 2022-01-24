import React from 'react';
import { View } from "react-native";
import { AppLayoutContainer, AppProfileHeaderSmall, AppText, AppDivider, AppIcon, AppTouch } from '@components/index';

const Layout = ({ data }) => {
   return (
      <AppLayoutContainer>
         <View style={{ padding: 10 }}>
            <AppProfileHeaderSmall
               data={data}
               content={data?.caption}
               showContent={true}
            />
            <View>
               <AppText
                  xsmall
                  gray
                  style={{ marginTop: 5 }}
               >
                  {
                     data?.time
                  }
               </AppText>
            </View>
         </View>

         <AppDivider />

         <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{}}>
               <AppProfileHeaderSmall
                  data={data}
               />
               <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                  <AppText xsmall gray style={{ marginRight: 15 }}>
                     {
                        data?.time
                     }
                  </AppText>
                  <AppText xsmall gray style={{ marginRight: 15 }}>
                     {
                        `3 likes`
                     }
                  </AppText>
                  <AppText xsmall gray style={{ marginRight: 15 }}>
                     {
                        "Reply"
                     }
                  </AppText>
               </View>
            </View>
            <View style={{ alignItems: 'center', paddingTop: 10 }}>
               <AppTouch>
                  <AppIcon
                     type="AntDesign"
                     name="hearto"
                     style={{ fontSize: 12 }}
                  />
               </AppTouch>
            </View>
         </View>

      </AppLayoutContainer>
   );
};

export default Layout;

