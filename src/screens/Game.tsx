import React, {useLayoutEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Layout} from '../layouts';
import {useTheme} from '../providers/ThemeProvider';
import GameContainer from '../components/GameContainer';
import {Title} from '../components/ui/Text';
import {useGetResidentsQuery} from '../store/useGetDataQuery';
import {useDispatch, useSelector} from 'react-redux';
import {setLocationDataToStore} from '../store/gameSlice';
import {RootState} from '../store';

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
  const {data, isFetching} = useGetResidentsQuery(game as number);
  useLayoutEffect(() => {
    if (data) {
      dispatch(setLocationDataToStore(data?.location));
    }
  }, [
    game,
    dispatch,
    data?.location.residents,
    data?.location.name,
    data?.location,
    data,
  ]);
  const {name, residents} = useSelector((state: RootState) => state.location);

  return (
    <Layout>
      <Title title={!isFetching ? `${name}` : 'wait...'} />
      {residents ? (
        <GameContainer residents={residents} />
      ) : (
        <ActivityIndicator size={'large'} color={navigationThemeColor} />
      )}
    </Layout>
  );
};

export default GameScreen;
