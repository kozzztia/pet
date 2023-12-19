import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  home: undefined;
  game: undefined;
  default: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'home' | 'game' | 'default'
>;
