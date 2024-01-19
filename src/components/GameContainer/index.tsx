import * as React from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {GameResident} from '../../types/residentType';

interface GameContainerProps {
  gameResidents: GameResident[];
}

const GameContainer: React.FC<GameContainerProps> = ({gameResidents}) => {
  console.log(gameResidents);
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.cardsContainer}>
        {gameResidents?.map(item => (
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item?.image as string}}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'stretch',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {},
});
