import React, {useState} from 'react';
import {Layout} from '../layouts';
import {RootStackParamList} from '../types/navigationsType';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';
import {COLORS, SIZES} from '../styles';
import {CustomButton} from '../components/ui/Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {useGetLocationsQuery} from '../store/useGetLocationsQuery';
import ListNavigation from '../components/ListNavigation';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [page, setPage] = useState<number>(1);
  const {title} = dictionary.home;
  const {data, isLoading, isError} = useGetLocationsQuery(page);

  if (isError) {
    return <Title title="Error" />;
  }
  console.log(data?.locations?.results);
  return (
    <Layout>
      <Title title={title} />
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.decorColor} />
      ) : (
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
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator size="large" color={COLORS.decorColor} />
            ) : (
              // <ListNavigation />
              <>
                <CustomButton
                  title={'next'}
                  handler={() => setPage(prev => prev + 1)}
                />
                <CustomButton
                  title={'prev'}
                  handler={() => setPage(prev => prev - 1)}
                />
              </>
            )
          }
        />
      )}
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    padding: SIZES.mainPadding,
  },
});
