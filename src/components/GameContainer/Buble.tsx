import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {getRundomSize} from '../../utils/gameUtils/bubleGameUtils';
import {GameResident} from '../../types/residentType';

interface BubleResidentProps {
  resident: GameResident;
}

const Buble: React.FC<BubleResidentProps> = ({resident}) => {
  const size = getRundomSize();
  return (
    <Image
      style={[styles.image, {width: size, height: size}]}
      source={{uri: resident?.image as string}}
    />
  );
};

export default Buble;

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
  },
});
