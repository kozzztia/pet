import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Layout} from '../layouts';

const DefaultScreen: React.FC = () => {
  return (
    <Layout>
      <View style={styles.box}>
        <Text>Details</Text>
      </View>
    </Layout>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
