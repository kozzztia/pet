import React from 'react';
import {Layout} from '../layouts';
import {RootStackParamList} from '../types/navigationsType';
import {FlatList, StyleSheet} from 'react-native';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';
import {SIZES} from '../styles';
import {CustomButton} from '../components/ui/Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {useGetLocationsQuery} from '../store/useGetLocationsQuery';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {title} = dictionary.home;
  const {data, isLoading} = useGetLocationsQuery(1);
  console.log(data);
  return (
    <Layout>
      <Title title={title} />
      <FlatList
        style={styles.list}
        data={data?.locations.results}
        renderItem={({item}) => (
          <CustomButton
            title={item.name}
            handler={() => navigation.navigate('Game', {game: item.name})}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    padding: SIZES.mainPadding,
  },
});
