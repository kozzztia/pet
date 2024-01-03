import React, {useState} from 'react';
import {Layout} from '../layouts';
import {RootStackParamList} from '../types/navigationsType';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';
import {COLORS, SIZES} from '../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useGetLocationsQuery} from '../store/useGetLocationsQuery';
import ListNavigation from '../components/ListNavigation';
import LocationsList from '../components/LocationsList';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [page, setPage] = useState<number | null>(1);
  const {title} = dictionary.home;
  const {data, isError, isFetching} = useGetLocationsQuery(page as number);
  const height = useWindowDimensions().height;

  if (isError) {
    return <Title title="Error" />;
  }
  const {wait} = dictionary.home;
  const pages =
    (page as number) * 20 - 20 + (data?.locations.results.length as number);
  return (
    <Layout>
      <View style={styles.container}>
        <Title title={`${title} ${!isFetching ? pages : wait}`} />
        {isFetching ? (
          <ActivityIndicator
            size="large"
            color={COLORS.decorColor}
            style={[styles.indicator, {maxHeight: height - 195}]}
          />
        ) : (
          <LocationsList
            locations={data?.locations.results}
            navigation={navigation}
          />
        )}
        <ListNavigation
          handler={setPage}
          next={data?.locations.info.next as number}
          prev={data?.locations.info.prev as number}
          isFetching={isFetching}
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
