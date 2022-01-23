import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

function AppStack() {
  const [isSignedIn, setIsSignedIn] = useState(true)

  return (
    <NavigationContainer>
      {
        isSignedIn ?
          <AppTabs />
          :
          <AuthStack />
      }
    </NavigationContainer>
  );
}


export default AppStack;