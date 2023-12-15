import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Games, HomeScreen, List} from '../screens';
import {ThemeButton} from '../components/Buttons';
import {useTheme} from '../providers/ThemeProvider';

const Stack = createStackNavigator();

const RouterContainer = () => {
  const {navigationThemeColor, titleThemeColor} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: {backgroundColor: navigationThemeColor},
          headerStyle: {
            backgroundColor: navigationThemeColor,
          },
          headerTintColor: titleThemeColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: titleThemeColor,
          },
          headerTitleAlign: 'center',
          // ...TransitionPresets.ModalSlideFromBottomIOS,
          animationEnabled: false,
          headerRight: props => {
            return ThemeButton(props);
          },
          // cardStyleInterpolator: ({current, layouts}) => {
          //   const translateY = current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [layouts.screen.height, 0],
          //   });

          //   return {
          //     cardStyle: {
          //       transform: [
          //         {
          //           translateY,
          //         },
          //       ],
          //     },
          //   };
          // },
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
