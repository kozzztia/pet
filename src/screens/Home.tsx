import React from 'react';
import {Text, Button} from 'react-native';
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
        {/* <Button
          title="Go to List"
          onPress={() => navigation.navigate('List')}
        /> */}
        <CustomButton
          handler={() => navigation.navigate('List')}
          title={'go to list'}
        />
        {/* <Button
          title="Go to Games"
          onPress={() => navigation.navigate('Games')}
        /> */}
        <CustomButton
          handler={() => navigation.navigate('Games')}
          title={'Go to Games'}
        />
      </ViewContainer>
    </Layout>
  );
};

export default HomeScreen;
