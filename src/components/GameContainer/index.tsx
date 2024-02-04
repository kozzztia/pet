import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import CardGameContainer from './CardGameContainer';
import BubleGameContainer from './BubleGameContainer';
import Sound from 'react-native-sound';

const backgroundMusic = new Sound(
  '../../assets/music/back.mp3',
  Sound.MAIN_BUNDLE,
  (error?: Error) => {
    if (error) {
      console.log('Error loading sound: ', error);
    } else {
      console.log('Sound loaded successfully');
    }
  },
);

interface GameContainerProps {
  gameResidents: GameResident[];
}

const GameContainer: React.FC<GameContainerProps> = ({gameResidents}) => {
  backgroundMusic.play();
  backgroundMusic.setVolume(0.5);
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
