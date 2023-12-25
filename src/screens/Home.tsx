import React, {useLayoutEffect} from 'react';
import {Layout} from '../layouts';
import {ScreenNavigationProp} from '../types/navigationsType';
import {CustomButton} from '../components/ui/Buttons';
import {GetLocations} from '../utils/workWithApi';
import {ActivityIndicator, FlatList} from 'react-native';
import {setLocationsAndNextPageToRedux} from '../store/locationsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {Title} from '../components/ui/Text';
import {api} from '../consts/api';

type HomeScreenProps = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
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
      <CustomButton
        handler={() => navigation.navigate('Game')}
        title={'Game'}
      />
      {locations && (
        <FlatList
          data={locations}
          renderItem={({item}) => <Title title={`${item.id}:${item.name}`} />}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => {
            nextPage &&
              GetLocations(nextPage).then(res =>
                dispatch(setLocationsAndNextPageToRedux(res)),
              );
          }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            nextPage ? (
              <ActivityIndicator size={'small'} color={'red'} />
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
