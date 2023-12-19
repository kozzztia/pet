import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Layout} from '../layouts';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';
import { ViewContainer } from '../components/ui/Containers';

const DefaultScreen: React.FC = () => {
  const {defaultTitle} = dictionary.screens;
  return (
    <Layout>
      <View style={styles.container}>
        <ViewContainer>
          <Title title={defaultTitle} />
        </ViewContainer>
        <View style={styles.image}>
          <Image source={require('../assets/start.gif')} style={styles.gif} />
        </View>
      </View>
    </Layout>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  gif: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
  },
});
