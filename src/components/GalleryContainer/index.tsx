import * as React from 'react';
import {StyleSheet, StyleProp, ViewStyle, View} from 'react-native';
import {Resident} from '../../types/residentType';
import GameCard from './GalleryCard';
import {ScrollView} from 'react-native-gesture-handler';

interface GalleryContainerProps {
  residents: Resident[];
  style?: StyleProp<ViewStyle>;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({
  residents,
  style,
}) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      <View style={styles.cardsContainer}>
        {residents?.map(item => (
          <GameCard data={item} key={item?.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default GalleryContainer;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'stretch',
  },
  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {},
});
