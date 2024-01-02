import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Game: {game: number};
  Default: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Game' | 'Default'
>;
