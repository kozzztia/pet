import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Buble from './Buble';
import {getRundomImageIndex} from '../../utils/gameUtils/bubleGameUtils';

interface BubleGameContainerProps {
  bubleGameResidents: GameResident[];
}

const BubleGameContainer: React.FC<BubleGameContainerProps> = ({
  bubleGameResidents,
}) => {
  const rundomIndex = getRundomImageIndex(bubleGameResidents.length);
  const handler = () => {
    console.log(rundomIndex);
  };
  return (
    <View style={styles.cardsContainer}>
      <Buble
        resident={bubleGameResidents[rundomIndex]}
        bubleHandler={() => handler()}
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
  image: {
    borderRadius: 50,
  },
});
