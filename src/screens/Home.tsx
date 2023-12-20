import React from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/type';
import {CustomButton} from '../components/ui/Buttons';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../providers/ThemeProvider';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {backgroundThemeColor} = useTheme();
  return (
    <Layout>
      <ScrollView style={{backgroundColor: backgroundThemeColor}}>
        <CustomButton
          handler={() => navigation.navigate('game')}
          title={'Go to Game'}
        />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
