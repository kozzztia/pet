import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../layouts';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../providers/ThemeProvider';

const GameScreen: React.FC = () => {
  const {backgroundThemeColor} = useTheme();
  return (
    <Layout>
      <ScrollView style={{backgroundColor: backgroundThemeColor}}>
        <Text>game number</Text>
      </ScrollView>
    </Layout>
  );
};

export default GameScreen;
