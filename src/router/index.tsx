import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Games, HomeScreen, List} from '../screens';
import {COLORS} from '../styles';

const Stack = createStackNavigator();

const RouterContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.navigationColor,
          },
          headerTintColor: COLORS.titleColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
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
