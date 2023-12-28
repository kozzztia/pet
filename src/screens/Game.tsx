import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../layouts';

type GameScreenProps = {
  route: {
    params: {
      game: string;
    };
  };
};

const GameScreen: React.FC<GameScreenProps> = ({route}) => {
  const {game} = route.params;
  return (
    <Layout>
      <Text>game {game}</Text>
    </Layout>
  );
};

export default GameScreen;
