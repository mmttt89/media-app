import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { navigationRef } from './RootNavigation';

function AppNavigationTree() {
   const [isSignedIn, setIsSignedIn] = useState(true)

   return (
      <NavigationContainer
         ref={navigationRef}
      >
         {
            isSignedIn ?
               <AppStack />
               :
               <AuthStack />
         }
      </NavigationContainer>
   );
}


export default AppNavigationTree;