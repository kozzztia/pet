import React from 'react';
import {CustomButton} from '../Buttons';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Location} from '../../../types/locationType';
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
  return (
    <View style={[styles.card, style]}>
      <CustomButton title={data?.name} handler={navigateHandler} />
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
  },
});
