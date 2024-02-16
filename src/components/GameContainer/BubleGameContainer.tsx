import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {GameResident} from '../../types/residentType';
import Buble from './Buble';
import {getRundomImageIndex} from '../../utils/gameUtils/bubleGameUtils';
import {useRef, useState} from 'react';
import Timer from '../BubleTimer/Timer';
import {Title} from '../ui/Text';

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
  const handler = () => {
    setClickedCount(prev => prev + 1);
    console.log(containerDimensions);
  };
  return (
    <View style={styles.cardsContainer} ref={containerRef} onLayout={onLayout}>
      {/* <Timer />
      <Title title={clickedCount.toString()} /> */}
      <Buble
        positions={containerDimensions}
        resident={bubleGameResidents[rundomIndex]}
        bubleHandler={() => handler()}
      />
    </View>
  );
};

export default BubleGameContainer;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  image: {
    borderRadius: 50,
  },
});
