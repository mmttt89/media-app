import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import colors from '@constants/colors';
import { AppLayoutContainer, AppText } from '@components/index';
import AppStack from '@navigations/index';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter
  };

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar backgroundColor={colors.main} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1 }}>
        <AppStack />
      </View>
    </SafeAreaView>
  );
};

export default App;
