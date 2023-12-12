import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.box}>
        <Text>Home Screen</Text>
        <Button
          title="Go to List"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title="Go to Games"
          onPress={() => navigation.navigate('Games')}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
