import React from 'react';
import { View } from "react-native";
import { AppLayoutContainer, AppProfileHeaderSmall, AppText, AppDivider, AppIcon, AppTouch } from '@components/index';
import { fromNow } from "@helpers/Utils";

const Layout = ({ data }) => {
   return (
      <AppLayoutContainer>
         <View style={{ padding: 10 }}>
            <AppProfileHeaderSmall
               user={data?.user}
               content={data?.description}
               showContent={true}
            />
            <View>
               <AppText
                  xsmall
                  gray
                  style={{ marginTop: 5 }}
               >
                  {
                     fromNow(data?.created_at)
                  }
               </AppText>
            </View>
         </View>

         <AppDivider />

         <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{}}>
               <AppProfileHeaderSmall
                  user={data?.user}
               />
               <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                  <AppText xsmall gray style={{ marginRight: 15 }}>
                     {
                        fromNow(data?.created_at)
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

