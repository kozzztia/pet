import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {GameResident} from '../../types/residentType';
import {COLORS} from '../../styles';
import {
  getRundomPosition,
  getRundomSize,
} from '../../utils/gameUtils/bubleGameUtils';

interface BubleResidentProps {
  resident: GameResident;
  bubleHandler: () => void;
  positions: {
    width: number;
    height: number;
  };
}

const Buble: React.FC<BubleResidentProps> = ({
  resident,
  bubleHandler,
  positions,
}) => {
  const size = getRundomSize(40, 50);
  const widthPosition = getRundomPosition(positions.width, size);
  const heightPosition = getRundomPosition(positions.height, size);
  return (
    <TouchableOpacity onPressIn={bubleHandler}>
      <Image
        style={[
          styles.image,
          {
            width: size,
            height: size,
            left: widthPosition,
            top: heightPosition,
          },
        ]}
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
