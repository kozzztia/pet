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
  card: {
    backgroundColor: 'orange',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
