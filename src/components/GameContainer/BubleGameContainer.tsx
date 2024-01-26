import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Buble from './Buble';

interface BubleGameContainerProps {
  bubleGameResidents: GameResident[];
}

const BubleGameContainer: React.FC<BubleGameContainerProps> = ({
  bubleGameResidents,
}) => {
  return (
    <View style={styles.cardsContainer}>
      <Buble resident={bubleGameResidents[0]} />
    </View>
  );
};

export default BubleGameContainer;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    borderRadius: 50,
  },
});
