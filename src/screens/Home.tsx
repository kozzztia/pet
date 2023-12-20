import React from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {CustomButton} from '../components/ui/Buttons';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Layout>
      <CustomButton
        handler={() => navigation.navigate('Game')}
        title={'Go to Game'}
      />
    </Layout>
  );
};

export default HomeScreen;
