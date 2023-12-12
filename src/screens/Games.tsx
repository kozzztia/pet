import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layout} from '../layouts';

const Games: React.FC = () => {
  return (
    <Layout>
      <View style={styles.box}>
        <Text>game number</Text>
      </View>
    </Layout>
  );
};

export default Games;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
