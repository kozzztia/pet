import * as React from 'react';
import {StyleProp, View, ViewStyle, Image, StyleSheet} from 'react-native';
import {Resident} from '../../types/residentType';
import {SIZES} from '../../styles';
import {Title} from '../ui/Text';

interface GalleryCardProps {
  data: Resident;
  style?: StyleProp<ViewStyle>;
}

const GalleryCard: React.FC<GalleryCardProps> = ({data, style}) => {
  return (
    <View style={[styles.card, style]}>
      {data?.image && (
        <Image style={styles.image} source={{uri: data?.image as string}} />
      )}
      <Title title={data?.name} />
      <Title title={data?.gender} />
    </View>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  card: {
    margin: SIZES.mainMargin,
    flexDirection: 'row',
  },
  image: {
    height: 100 - SIZES.mainMargin,
    width: 100 - SIZES.mainMargin,
    resizeMode: 'cover',
  },
});
