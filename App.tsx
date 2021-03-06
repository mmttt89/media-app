import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import storeObject from "@redux/store/index"
import { PersistGate } from 'redux-persist/integration/react';
import colors from '@constants/colors';
import AppStack from '@navigations/index';

const { store, persistor } = storeObject
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        
          <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
            <StatusBar backgroundColor={backgroundStyle.backgroundColor} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ flex: 1 }}>
              <AppStack />
            </View>
          </SafeAreaView>
        
      </PersistGate>
    </Provider>
  );
};

export default App;
