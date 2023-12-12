import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {Games, HomeScreen, List} from '../screens';
import {LoginButton} from '../components/Buttons';
import {useTheme} from '../providers/ThemeProvider';

const Stack = createStackNavigator();

const RouterContainer = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: navigationThemeColor,
          },
          headerTintColor: titleThemeColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerRight: props => {
            return LoginButton(props);
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Games"
          component={Games}
          options={{title: 'Games'}}
        />
        <Stack.Screen name="List" component={List} options={{title: 'List'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterContainer;
