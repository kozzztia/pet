import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../styles';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  return (
    <SafeAreaView style={[styles.layout]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.darkBackground}
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
    backgroundColor: COLORS.mainColor,
  },
  container: {
    padding: SIZES.mainPadding,
  },
});
