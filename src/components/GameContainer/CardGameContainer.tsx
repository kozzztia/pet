import * as React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';

interface CardGameContainerProps {
  cardGameResidents: GameResident[];
}

const CardGameContainer: React.FC<CardGameContainerProps> = ({
  cardGameResidents,
}) => {
  const size = Dimensions.get('window').width / 4 - SIZES.mainMargin * 2;
  return (
    <View style={styles.cardsContainer}>
      {cardGameResidents?.map(item => (
        <View style={[styles.card, {width: size, height: size}]} key={item.id}>
          <Image style={styles.image} source={{uri: item?.image as string}} />
        </View>
      ))}
    </View>
  );
};

export default CardGameContainer;

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
