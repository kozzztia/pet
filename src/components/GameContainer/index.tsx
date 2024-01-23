import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import CardGameContainer from './CardGameContainer';
import BubleGameContainer from './BubleGameContainer';

interface GameContainerProps {
  gameResidents: GameResident[];
}

const GameContainer: React.FC<GameContainerProps> = ({gameResidents}) => {
  return (
    <View style={styles.container}>
      {gameResidents?.length < 8 ? (
        <BubleGameContainer bubleGameResidents={gameResidents} />
      ) : (
        <CardGameContainer cardGameResidents={gameResidents} />
      )}
    </View>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
