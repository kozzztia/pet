import React, {useLayoutEffect} from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/navigationsType';

import {GetLocations} from '../utils/workWithApi';
import {ActivityIndicator, FlatList} from 'react-native';
import {setLocationsAndNextPageToRedux} from '../store/locationsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {Title} from '../components/ui/Text';
import {api} from '../consts/api';
import {useTheme} from '../providers/ThemeProvider';
import LocationCard from '../components/LocationCard';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {navigationThemeColor} = useTheme();
  const dispatch = useDispatch();
  const {locations, nextPage} = useSelector(
    (state: RootState) => state.locations,
  );
  useLayoutEffect(() => {
    GetLocations(api).then(res =>
      dispatch(setLocationsAndNextPageToRedux(res)),
    );
  }, [dispatch]);
  return (
    <Layout>
      {locations && (
        <FlatList
          data={locations}
          // windowSize={5}
          // initialNumToRender={5}
          renderItem={({item}) => (
            <LocationCard
              key={`${item.id.toString()}${item.name}`}
              data={item}
              navigation={navigation}
            />
          )}
          // keyExtractor={item => `${item.id.toString()}${item.name}`}
          onEndReached={() => {
            nextPage &&
              GetLocations(nextPage).then(res =>
                dispatch(setLocationsAndNextPageToRedux(res)),
              );
          }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            nextPage ? (
              <ActivityIndicator size={'small'} color={navigationThemeColor} />
            ) : (
              <Title title={locations.length.toString()} />
            )
          }
        />
      )}
    </Layout>
  );
};

export default HomeScreen;
