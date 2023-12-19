import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../layouts';
import {ScrollView} from 'react-native-gesture-handler';

const GameScreen: React.FC = () => {
  return (
    <Layout>
      <ScrollView>
        <Text>game number</Text>\
      </ScrollView>
    </Layout>
  );
};

export default GameScreen;
