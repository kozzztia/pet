import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {ViewContainer} from '../components/Containers';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Layout>
      <ViewContainer>
        <Text>Home Screen</Text>
        <Button
          title="Go to List"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title="Go to Games"
          onPress={() => navigation.navigate('Games')}
        />
      </ViewContainer>
    </Layout>
  );
};

export default HomeScreen;
