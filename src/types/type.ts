import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Games: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'List' | 'Games'
>;
