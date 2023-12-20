import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '../providers/ThemeProvider';
import {dictionary} from '../consts/dictionary';
import {SIZES} from '../styles';
import {ThemeButton} from '../components/ui/Buttons';
import {paths} from '../consts/paths';
import {GameScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

const UserRoutes = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  const {homeTitle, gameTitle} = dictionary.screens;
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
        name={paths.HOME_SCREEN}
        component={HomeScreen}
        options={{title: homeTitle}}
      />
      <Stack.Screen
        name={paths.GAME_SCREEN}
        component={GameScreen}
        options={{title: gameTitle}}
      />
    </Stack.Navigator>
  );
};

export default UserRoutes;
