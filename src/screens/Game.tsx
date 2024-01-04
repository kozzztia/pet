import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../layouts';
import {useGetResidentsQuery} from '../store/useGetDataQuery';

type GameScreenProps = {
  route: {
    params: {
      game: number;
    };
  };
};

const GameScreen: React.FC<GameScreenProps> = ({route}) => {
  const {game} = route.params;
  const {data, isError, isFetching} = useGetResidentsQuery(game as number);
  console.log(data);
  return (
    <Layout>
      <Text>game {game}</Text>
    </Layout>
  );
};

export default GameScreen;
