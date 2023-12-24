import React, {useLayoutEffect} from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/navigationsType';
import {CustomButton} from '../components/ui/Buttons';
import {GetLocations} from '../utils/workWithApi';
import {FlatList, Text} from 'react-native';
import {setLocationsAndNextPageToRedux} from '../store/locationsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {locations, nextPage} = useSelector(
    (state: RootState) => state.locations,
  );
  useLayoutEffect(() => {
    GetLocations('https://rickandmortyapi.com/api/location?page=1').then(res =>
      dispatch(setLocationsAndNextPageToRedux(res)),
    );
  }, [dispatch]);
  return (
    <Layout>
      <CustomButton
        handler={() => navigation.navigate('Game')}
        title={'Go to Game'}
      />
      {locations && (
        <FlatList
          data={locations}
          renderItem={({item}) => (
            <Text>
              {item.id}:{item.name}
            </Text>
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => {
            nextPage &&
              GetLocations(nextPage).then(res =>
                dispatch(setLocationsAndNextPageToRedux(res)),
              );
          }}
          onEndReachedThreshold={0.1}
        />
      )}
    </Layout>
  );
};

export default HomeScreen;
