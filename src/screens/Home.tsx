import React from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {CustomButton} from '../components/ui/Buttons';
import GreatingContainer from '../components/Greating/GreatingContainer';
import {ScrollView} from 'react-native-gesture-handler';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Layout>
      <ScrollView>
        <GreatingContainer />
        <CustomButton
          handler={() => navigation.navigate('game')}
          title={'Go to Game'}
        />
        <CustomButton
          handler={() => navigation.navigate('default')}
          title={'default'}
        />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
