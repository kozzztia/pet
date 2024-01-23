import * as React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';

interface BubleGameContainerProps {
  bubleGameResidents: GameResident[];
}

const BubleGameContainer: React.FC<BubleGameContainerProps> = ({
  bubleGameResidents,
}) => {
  const size = Dimensions.get('window').width / 10 - SIZES.mainMargin * 2;
  return (
    <View style={styles.cardsContainer}>
      {bubleGameResidents?.map(item => (
        <View style={[styles.card, {width: size, height: size}]} key={item.id}>
          <Image style={styles.image} source={{uri: item?.image as string}} />
        </View>
      ))}
    </View>
  );
};

export default BubleGameContainer;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    width: '100%',
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
