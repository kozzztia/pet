import * as React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import {SIZES} from '../../styles';
import {GameResident} from '../../types/residentType';

interface CardProps {
  resident: GameResident;
  handle: (residentId: string) => void;
}

const Card: React.FC<CardProps> = ({resident, handle}) => {
  const size = Dimensions.get('window').width / 4 - SIZES.mainMargin * 2;
  const {id, image, isOpen, name} = resident;
  const handleTouchStart = () => {
    handle(id as string);
  };
  return (
    <View
      style={[styles.card, {width: size, height: size}]}
      onTouchStart={handleTouchStart}>
      <Image
        style={[
          styles.image,
          isOpen ? styles.openImage : styles.closeImage,
          {transform: [{rotate: isOpen ? '-45deg' : '0deg'}]},
        ]}
        source={{uri: image as string}}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    margin: SIZES.mainMargin,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeImage: {},
  openImage: {},
});
