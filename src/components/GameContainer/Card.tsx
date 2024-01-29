import * as React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {GameResident} from '../../types/residentType';
import {SIZES} from '../../styles';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';

interface CardGameProps {
  cardGameResident: GameResident;
  cardHendler: (residentName: string) => void;
}

const Card: React.FC<CardGameProps> = ({cardGameResident, cardHendler}) => {
  const size = Dimensions.get('window').width / 4 - SIZES.mainMargin * 2;
  const {selectResidents} = useSelector((state: RootState) => state.location);
  const handler = () => {
    cardHendler(cardGameResident.id as string);
  };
  return (
    <View
      style={[styles.card, {width: size, height: size}]}
      onTouchEnd={handler}>
      {cardGameResident.isOpen && (
        <Image
          style={[
            styles.image,
            selectResidents.includes(cardGameResident.id as string)
              ? styles.open
              : styles.close,
          ]}
          source={{uri: cardGameResident?.image as string}}
        />
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    margin: SIZES.mainMargin,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0.3,
  },
});
