import * as React from 'react';
import {Image, StyleSheet, Dimensions, Animated} from 'react-native';
import {GameResident} from '../../types/residentType';
import {COLORS, SIZES} from '../../styles';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';

interface CardGameProps {
  cardGameResident: GameResident;
  cardHandler: (residentName: string) => void;
  square: number;
}

const Card: React.FC<CardGameProps> = ({
  cardGameResident,
  cardHandler,
  square,
}) => {
  const size = Dimensions.get('window').width / square - SIZES.mainMargin * 2;
  const {selectResidents} = useSelector((state: RootState) => state.location);
  const [opacity] = React.useState(
    new Animated.Value(cardGameResident.isOpen ? 1 : 0),
  );

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: cardGameResident.isOpen ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [cardGameResident.isOpen, opacity]);

  const handler = () => {
    cardHandler(cardGameResident.id as string);
  };

  return (
    <Animated.View
      style={[styles.card, {width: size, height: size, opacity: opacity}]}
      onTouchEnd={handler}>
      <Image
        style={[
          styles.image,
          selectResidents.includes(cardGameResident.id as string)
            ? styles.open
            : styles.close,
        ]}
        source={{uri: cardGameResident?.image as string}}
      />
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    margin: SIZES.mainMargin,
    backgroundColor: COLORS.decorColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
});
