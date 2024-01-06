import React, {useLayoutEffect} from 'react';
import {getBlendedId} from '../utils/gameUtils';
import {ActivityIndicator} from 'react-native';
import {Layout} from '../layouts';
import {useGetResidentsQuery} from '../store/useGetDataQuery';
import {useTheme} from '../providers/ThemeProvider';
import {Title} from '../components/ui/Text';
import GameContainer from '../components/GameContainer';

type GameScreenProps = {
  route: {
    params: {
      game: number;
    };
  };
};

const GameScreen: React.FC<GameScreenProps> = ({route}) => {
  const {game} = route.params;
  const {navigationThemeColor} = useTheme();
  const {data, isFetching} = useGetResidentsQuery(game as number);
  if (isFetching) {
    <ActivityIndicator size={'large'} color={navigationThemeColor} />;
  }
  useLayoutEffect(() => {
    if (data?.location.residents.length) {
      const array = getBlendedId(data.location.residents.length);
      console.log(array);
    }
  }, [data?.location.residents]);
  return (
    <Layout>
      <Title
        title={`${data?.location?.name}: ${
          data ? data?.location.residents.length : 'wait...'
        }`}
      />
      <GameContainer residents={data?.location.residents} />
    </Layout>
  );
};

export default GameScreen;
