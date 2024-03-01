import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Buble from './Buble';
import {getRundomImageIndex} from '../../utils/gameUtils/bubleGameUtils';
import {useRef, useState} from 'react';
import Timer from '../BubleTimer/Timer';

interface BubleGameContainerProps {
  bubleGameResidents: GameResident[];
}

const BubleGameContainer: React.FC<BubleGameContainerProps> = ({
  bubleGameResidents,
}) => {
  const containerRef = useRef<View>(null);
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  }>({width: 0, height: 0});

  const onLayout = () => {
    if (containerRef.current) {
      containerRef.current.measure((_x, _y, width, height) => {
        setContainerDimensions({width, height});
      });
    }
  };
  const [clickedCount, setClickedCount] = useState<number>(0);

  const rundomIndex = getRundomImageIndex(bubleGameResidents.length);
  const bubleHandler = () => {
    setClickedCount(prev => prev + 1);
  };
  return (
    <View style={styles.gameContainer}>
      <Timer />
      <View
        style={styles.cardsContainer}
        ref={containerRef}
        onLayout={onLayout}>
        <Buble
          positions={containerDimensions}
          resident={bubleGameResidents[rundomIndex]}
          bubleHandler={() => bubleHandler()}
        />
      </View>
    </View>
  );
};

export default BubleGameContainer;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    flexShrink: 1,
    width: '100%',
    padding: 20,
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    borderRadius: 50,
  },
  restartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
