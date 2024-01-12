import * as React from 'react';
import {StyleSheet, StyleProp, ViewStyle, View} from 'react-native';
import {GameResident} from '../../types/residentType';
import GameCard from './GameCard';
import {ScrollView} from 'react-native-gesture-handler';
import {getCardSize} from '../../utils/gameUtils';

interface GameContainerProps {
  residents: GameResident[] | undefined;
  style?: StyleProp<ViewStyle>;
}

const GameContainer: React.FC<GameContainerProps> = ({residents, style}) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      <View style={styles.cardsContainer}>
        {residents?.map(item => (
          <GameCard
            data={item}
            key={item?.id}
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
