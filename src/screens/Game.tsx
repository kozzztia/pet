import React from 'react';
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
