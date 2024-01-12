import React from 'react';
import {SetGameData} from '../utils/gameUtils';
import {ActivityIndicator} from 'react-native';
import {Layout} from '../layouts';
import {useTheme} from '../providers/ThemeProvider';
import GameContainer from '../components/GameContainer';

import {RootState} from '../store';
import {useSelector} from 'react-redux';
import {Title} from '../components/ui/Text';

type GameScreenProps = {
  route: {
    params: {
      game: number;
    };
  };
};

const GameScreen: React.FC<GameScreenProps> = ({route}) => {
  const {navigationThemeColor} = useTheme();
  const {game} = route.params;
  SetGameData(game);
  const {gameResidents, locationName} = useSelector(
    (state: RootState) => state.game,
  );

  return (
    <Layout>
      <Title title={locationName ? `${locationName}` : 'wait...'} />
      {gameResidents ? (
        <GameContainer residents={gameResidents} />
      ) : (
        <ActivityIndicator size={'large'} color={navigationThemeColor} />
      )}
    </Layout>
  );
};

export default GameScreen;
