import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '../providers/ThemeProvider';
import {dictionary} from '../consts/dictionary';
import {SIZES} from '../styles';
import {ThemeButton} from '../components/ui/Buttons';
import {paths} from '../consts/paths';
import {DefaultScreen} from '../screens';

const Stack = createStackNavigator();

const DefaultRoutes = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  const {defaultTitle} = dictionary.screens;
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: navigationThemeColor,
        },
        headerStyle: {
          backgroundColor: navigationThemeColor,
          height: SIZES.minComtainerHeight,
        },
        headerTintColor: titleThemeColor,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: titleThemeColor,
          marginRight: 'auto',
        },
        headerTitleAlign: 'center',
        animationEnabled: false,
        headerRight: props => {
          return ThemeButton(props);
        },
      }}>
      <Stack.Screen
        name={paths.DEFAULT_SCREEN}
        component={DefaultScreen}
        options={{title: defaultTitle}}
      />
    </Stack.Navigator>
  );
};

export default DefaultRoutes;
