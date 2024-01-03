import React from 'react';
import {CustomButton} from '../ui/Buttons';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Location} from '../../types/locationType';
import {Title} from '../ui/Text';
import {SIZES} from '../../styles';
import {dictionary} from '../../consts/dictionary';
interface LocationCardProps {
  data: Location;
  navigateHandler: () => void;
  style?: StyleProp<ViewStyle>;
}

const LocationCard: React.FC<LocationCardProps> = ({
  data,
  navigateHandler,
  style,
}) => {
  const {link} = dictionary.home;
  return (
    <View style={[styles.card, style]}>
      <Title title={data?.name} style={styles.title} />
      <Title title={data?.residents.length.toString()} style={styles.number} />
      <CustomButton title={link} handler={navigateHandler} />
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: SIZES.textSize,
  },
  number: {
    fontSize: SIZES.textSize,
    marginLeft: 'auto',
  },
});
