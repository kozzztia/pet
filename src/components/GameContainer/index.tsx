import * as React from 'react';
import {StyleSheet, StyleProp, ViewStyle, View, Dimensions} from 'react-native';
import {Resident} from '../../types/residentType';
import GameCard from './GameCard';
import {ScrollView} from 'react-native-gesture-handler';
import {SIZES} from '../../styles';

interface GameContainerProps {
  residents: Resident[] | undefined;
  style?: StyleProp<ViewStyle>;
}

const getCardSize = (length: number): number => {
  const cardSize = Dimensions.get('window').width;
  if (length <= 10) {
    return cardSize / 2 - SIZES.mainMargin;
  }
  if (length > 10 && length <= 30) {
    return cardSize / 3 - SIZES.mainMargin;
  }
  if (length > 30 && length <= 60) {
    return cardSize / 4 - SIZES.mainMargin;
  }
  if (length > 60) {
    return cardSize / 5 - SIZES.mainMargin;
  } else {
    return 0;
  }
};

const GameContainer: React.FC<GameContainerProps> = ({residents, style}) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      <View style={styles.cardsContainer}>
        {residents?.map(item => (
          <GameCard
            data={item}
            key={item.id}
            style={[
              styles.card,
              {
                height: getCardSize(residents.length),
                width: getCardSize(residents.length),
              },
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  card: {},
});
