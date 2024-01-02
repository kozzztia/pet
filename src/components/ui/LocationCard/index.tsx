import React from 'react';
import {CustomButton} from '../Buttons';
import {View, StyleSheet, StyleProp, Text, ViewStyle} from 'react-native';
import {Location} from '../../../types/locationType';
import {Title} from '../Text';
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
  console.log(data);
  return (
    <View style={[styles.card, style]}>
      <Title title={data?.name} style={styles.title} />
      <CustomButton title={'->'} handler={navigateHandler} />
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
  },
  title: {
  },
});
