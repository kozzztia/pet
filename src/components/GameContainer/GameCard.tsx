import * as React from 'react';
import {StyleProp, View, ViewStyle, Image, StyleSheet} from 'react-native';
import {Resident} from '../../types/residentType';

interface GameCardProp {
  data: Resident | undefined;
  style?: StyleProp<ViewStyle>;
}

const GameCard: React.FC<GameCardProp> = ({data, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: data?.image as string}} />
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  card: {},
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
});
