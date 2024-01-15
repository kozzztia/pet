import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Layout} from '../layouts';
import {useTheme} from '../providers/ThemeProvider';
import {Title} from '../components/ui/Text';
import {useGetResidentsQuery} from '../store/useGetDataQuery';
import {useDispatch, useSelector} from 'react-redux';
import {
  initialState as initialGameState,
  setLocationDataToStore,
} from '../store/gameSlice';
import {RootState} from '../store';
import {CustomButton} from '../components/ui/Buttons';
import {dictionary} from '../consts/dictionary';
import GalleryContainer from '../components/GalleryContainer';
import GameContainer from '../components/GameContainer';

type GameScreenProps = {
  route: {
    params: {
      game: number;
    };
  };
};

const GameScreen: React.FC<GameScreenProps> = ({route}) => {
  const dispatch = useDispatch();
  const {navigationThemeColor} = useTheme();
  const {game} = route.params;
  const {data} = useGetResidentsQuery(game as number);
  const {name, residents} = useSelector((state: RootState) => state.location);
  const {btnMore, btnGame} = dictionary.dame;

  const [isShow, setIsShow] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (data) {
      dispatch(setLocationDataToStore(data?.location));
    }
  }, [game, dispatch, data?.location.residents, data?.location.name, data]);

  useLayoutEffect(() => {
    const cleanStore = () => {
      dispatch(setLocationDataToStore(initialGameState));
    };
    return cleanStore;
  }, [dispatch]);
  return (
    <Layout>
      <View style={styles.controll}>
        <Title title={name !== initialGameState.name ? `${name}` : 'wait...'} />
        <CustomButton
          title={isShow ? btnGame : btnMore}
          handler={() => setIsShow(prev => !prev)}
        />
      </View>
      {residents.length > 0 ? (
        isShow ? (
          <GalleryContainer residents={residents} />
        ) : (
          <GameContainer />
        )
      ) : (
        <ActivityIndicator size={'large'} color={navigationThemeColor} />
      )}
    </Layout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  controll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
