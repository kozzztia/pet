import React, {useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {Layout} from '../layouts';
import {useTheme} from '../providers/ThemeProvider';
import {Title} from '../components/ui/Text';
import {useGetResidentsQuery} from '../store/useGetDataQuery';
import {useDispatch, useSelector} from 'react-redux';
import {
  setBublesDataToStore,
  initialState as initialGameState,
  setLocationDataToStore,
} from '../store/gameSlice';
import {RootState} from '../store';
import {CustomButton} from '../components/ui/Buttons';
import {dictionary} from '../consts/dictionary';
import GalleryContainer from '../components/GalleryContainer';
import GameContainer from '../components/GameContainer';
import {SIZES} from '../styles/sizes';

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
  const height = useWindowDimensions().height;
  const {game} = route.params;
  const {data} = useGetResidentsQuery(game as number);
  const {name, residents, bubles} = useSelector(
    (state: RootState) => state.location,
  );
  const {btnMore, btnGame} = dictionary.dame;

  const [isShow, setIsShow] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (data) {
      dispatch(
        setLocationDataToStore(data?.location),
        setBublesDataToStore({bubles: []}),
      );
    }
  }, [game, dispatch, data?.location.residents, data?.location.name, data]);

  useLayoutEffect(() => {
    return () => {
      dispatch(
        setLocationDataToStore(initialGameState),
        setBublesDataToStore({bubles: []}),
      );
    };
  }, [dispatch]);
  return (
    <Layout>
      {name !== initialGameState.name ? (
        <View style={styles.controll}>
          <Title title={name} />
          <CustomButton
            title={isShow ? btnGame : btnMore}
            handler={() => setIsShow(prev => !prev)}
          />
        </View>
      ) : (
        <Title title={'wait...'} />
      )}

      {residents.length > 0 ? (
        isShow ? (
          <GalleryContainer residents={residents} />
        ) : (
          <GameContainer />
        )
      ) : (
        <ActivityIndicator
          size={'large'}
          color={navigationThemeColor}
          style={[styles.indicator, {maxHeight: height - SIZES.screenSize}]}
        />
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
  indicator: {
    flexGrow: 1,
  },
});
