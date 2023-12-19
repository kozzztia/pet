import React from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {ViewContainer} from '../components/ui/Containers';
import GreatingContainer from '../components/Greating/GreatingContainer';
import {CustomButton} from '../components/ui/Buttons';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Layout>
      <ViewContainer>
        <GreatingContainer />
        <CustomButton
          handler={() => navigation.navigate('game')}
          title={'Go to Game'}
        />
        <CustomButton
          handler={() => navigation.navigate('default')}
          title={'default'}
        />
      </ViewContainer>
    </Layout>
  );
};

export default HomeScreen;
