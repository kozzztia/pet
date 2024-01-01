import React, {useState} from 'react';
import {Layout} from '../layouts';
import {RootStackParamList} from '../types/navigationsType';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
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
  const [page, setPage] = useState<number | null>(1);
  const {title} = dictionary.home;
  const {data, isLoading, isError, isFetching} = useGetLocationsQuery(
    page as number,
  );

  if (isError) {
    return <Title title="Error" />;
  }

  const hasNextPage = !!data?.locations?.info.next;
  const hasPrevPage = !!data?.locations?.info.prev;

  return (
    <Layout>
      <View style={styles.container}>
        <Title title={title} />
        {isFetching ? (
          <ActivityIndicator
            size="large"
            color={COLORS.decorColor}
            style={styles.indicator}
          />
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
          />
        )}
        <ListNavigation
          handler={setPage}
          next={data?.locations.info.next}
          prev={data?.locations.info.prev}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  indicator: {
    flexGrow: 1,
  },
  list: {
    padding: SIZES.mainPadding,
  },
});

export default HomeScreen;
