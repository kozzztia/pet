import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {useTheme} from '../providers/ThemeProvider';
import GreatingContainer from '../components/Greating';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {backgroundThemeColor, dark} = useTheme();
  return (
    <SafeAreaView style={[styles.layout]}>
      <StatusBar
        barStyle={!dark ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundThemeColor}
        // animated={false}
      />
      <GreatingContainer />
      <ScrollView
        contentContainerStyle={styles.content}
        style={{...styles.view, backgroundColor: backgroundThemeColor}}>
        {children}
      </ScrollView>
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
  view: {
    flex: 1,
  },
});
