import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Home} from './screens';
import {COLORS, SIZES} from './consts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? COLORS.lightBackground
      : COLORS.darkBackground,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        animated
      />
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
