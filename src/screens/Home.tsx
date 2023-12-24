import React, {useLayoutEffect, useState} from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/navigationsType';
import {CustomButton} from '../components/ui/Buttons';
import {GetLocations} from '../utils/workWithApi';
import {locationType} from '../types/locationsTypes';
import {FlatList, Text} from 'react-native';
import {setLocationsToRedux} from '../store/locationsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const locations = useSelector(
    (state: RootState) => state.locations.locations,
  );
  useLayoutEffect(() => {
    GetLocations('https://rickandmortyapi.com/api/location?page=1').then(res =>
      dispatch(setLocationsToRedux(res)),
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
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
          // onEndReached={loadMoreData}
          // onEndReachedThreshold={0.1}
        />
      )}
    </Layout>
  );
};

export default HomeScreen;
