import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GameScreen, HomeScreen, DefaultScreen} from '../screens';
import {ThemeButton} from '../components/ui/Buttons';
import {useTheme} from '../providers/ThemeProvider';
import {SIZES} from '../styles';
import {paths} from '../consts/paths';
import {dictionary} from '../consts/dictionary';

const Stack = createStackNavigator();

const RouterContainer = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  const {homeTitle, gameTitle, defaultTitle} = dictionary.screens;
  return (
    <NavigationContainer>
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
          name={paths.DEFAULT_SCREEN}
          component={DefaultScreen}
          options={{title: defaultTitle}}
        />
        <Stack.Screen
          name={paths.GAME_SCREEN}
          component={GameScreen}
          options={{title: gameTitle}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterContainer;
