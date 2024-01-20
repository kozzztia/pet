import React, {useEffect, useLayoutEffect, useState} from 'react';
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
  initialState as initialLocationState,
  setLocationDataToStore,
} from '../store/locationSlice';
import {RootState} from '../store';
import {CustomButton} from '../components/ui/Buttons';
import {dictionary} from '../consts/dictionary';
import GalleryContainer from '../components/GalleryContainer';
import GameContainer from '../components/GameContainer';
import {SIZES} from '../styles';
import {blendedResidents} from '../utils/gameUtils/utils';

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
  const {name, residents, gameResidents} = useSelector(
    (state: RootState) => state.location,
  );
  const {btnMore, btnGame} = dictionary.game;

  const [isShow, setIsShow] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (data) {
      dispatch(
        setLocationDataToStore({
          residents: data.location.residents,
          name: data.location.name,
          gameResidents: blendedResidents(data.location.residents),
        }),
      );
    }
  }, [game, dispatch, data]);

  useLayoutEffect(() => {
    return () => {
      dispatch(setLocationDataToStore(initialLocationState));
    };
  }, [dispatch]);
  return (
    <Layout>
      {name !== initialLocationState.name ? (
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

      {residents ? (
        isShow ? (
          <GalleryContainer residents={residents} />
        ) : (
          <GameContainer gameResidents={gameResidents} />
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
