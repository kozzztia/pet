import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Layout} from '../layouts';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';

const DefaultScreen: React.FC = () => {
  const {message} = dictionary.default;
  return (
    <Layout>
      <View style={styles.image}>
        <Image
          source={require('../assets/image/start.png')}
          style={styles.start}
        />
      </View>
      <Title title={message} style={styles.title} />
    </Layout>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: '10%',
    left: 0,
    width: '100%',
    textAlign: 'center',
  },
  start: {
    flex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
