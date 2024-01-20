import * as React from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';

interface GameContainerProps {
  gameResidents: GameResident[];
}

const GameContainer: React.FC<GameContainerProps> = ({gameResidents}) => {
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={styles.cardsContainer}>
        {gameResidents?.map(item => (
          <Image
            key={item.id}
            style={{width: 90, height: 90, margin: SIZES.mainMargin}}
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
