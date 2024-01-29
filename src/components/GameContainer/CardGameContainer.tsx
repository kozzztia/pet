import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectResidentsToStore} from '../../store/locationSlice';
import {RootState} from '../../store';

interface CardGameContainerProps {
  cardGameResidents: GameResident[];
}

const CardGameContainer: React.FC<CardGameContainerProps> = ({
  cardGameResidents,
}) => {
  const dispatch = useDispatch();
  const {selectResidents} = useSelector((state: RootState) => state.location);

  const handler = (residentId: string) => {
    dispatch(setSelectResidentsToStore(residentId as string));
  };

  React.useEffect(() => {
    console.log(selectResidents);
  }, [selectResidents]);
  return (
    <View style={styles.cardsContainer}>
      {cardGameResidents?.map(item => (
        <Card cardHendler={handler} cardGameResident={item} key={item.id} />
      ))}
    </View>
  );
};

export default CardGameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
