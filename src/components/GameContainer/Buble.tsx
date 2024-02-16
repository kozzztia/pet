import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {GameResident} from '../../types/residentType';
import {COLORS} from '../../styles';

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
  return (
    <TouchableOpacity onPressIn={bubleHandler}>
      <Image
        style={[
          styles.image,
          {
            width: 20,
            height: 20,
            left: positions.width - 20,
            top: positions.height - 20,
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
