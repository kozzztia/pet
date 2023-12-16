import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Games, HomeScreen, List} from '../screens';
import {ThemeButton} from '../components/ui/Buttons';
import {useTheme} from '../providers/ThemeProvider';
import {SIZES} from '../styles';

const Stack = createStackNavigator();

const RouterContainer = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
