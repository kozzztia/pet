import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <SafeAreaView style={[styles.layout]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.backgroundColor}
        showHideTransition={'fade'}
        animated={false}
      />
      <ScrollView style={[styles.container]}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    padding: SIZES.mainPadding,
  },
});
