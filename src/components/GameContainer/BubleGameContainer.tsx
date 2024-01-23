import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';
import {getRundomSize} from '../../utils/gameUtils/bubleGameUtils';

interface BubleGameContainerProps {
  bubleGameResidents: GameResident[];
}

const BubleGameContainer: React.FC<BubleGameContainerProps> = ({
  bubleGameResidents,
}) => {
  const size = getRundomSize();
  return (
    <View style={styles.cardsContainer}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{uri: bubleGameResidents[0]?.image as string}}
      />
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
    width: 30,
    height: 30,
  },
});
