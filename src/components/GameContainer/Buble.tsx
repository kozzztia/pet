import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getRundomSize} from '../../utils/gameUtils/bubleGameUtils';
import {GameResident} from '../../types/residentType';
import {COLORS} from '../../styles';

interface BubleResidentProps {
  resident: GameResident;
  bubleHandler: () => void;
}

const Buble: React.FC<BubleResidentProps> = ({resident, bubleHandler}) => {
  const size = getRundomSize();
  return (
    <TouchableOpacity onPressIn={bubleHandler}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={
          resident?.image
            ? {
                uri: resident?.image as string,
              }
            : require('../../assets/image/start.png')
        }
      />
    </TouchableOpacity>
  );
};

export default Buble;

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    backgroundColor: COLORS.decorColor,
  },
});
