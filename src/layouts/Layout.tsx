import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useTheme} from '../providers/ThemeProvider';
import GreatingContainer from '../components/Greating';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {backgroundThemeColor, dark} = useTheme();
  return (
    <SafeAreaView
      style={{...styles.layout, backgroundColor: backgroundThemeColor}}>
      <StatusBar
        barStyle={!dark ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundThemeColor}
        // animated={false}
      />
      <GreatingContainer />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
