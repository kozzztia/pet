import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';

interface GameContainerProps {
  gameResidents: GameResident[];
}

const GameContainer: React.FC<GameContainerProps> = ({gameResidents}) => {
  const size = Dimensions.get('window').width / 4 - SIZES.mainMargin * 2;
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {gameResidents?.map(item => (
          <View
            style={[styles.card, {width: size, height: size}]}
            key={item.id}>
            <Image style={styles.image} source={{uri: item?.image as string}} />
          </View>
        ))}
      </View>
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
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    margin: SIZES.mainMargin,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
