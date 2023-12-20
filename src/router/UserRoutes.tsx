import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '../providers/ThemeProvider';
import {SIZES} from '../styles';
import {ThemeButton} from '../components/ui/Buttons';
import {paths} from '../consts/paths';
import {GameScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

const UserRoutes = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
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
        options={{title: paths.HOME_SCREEN}}
      />
      <Stack.Screen
        name={paths.GAME_SCREEN}
        component={GameScreen}
        options={{title: paths.GAME_SCREEN}}
      />
    </Stack.Navigator>
  );
};

export default UserRoutes;
