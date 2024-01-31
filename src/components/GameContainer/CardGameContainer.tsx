import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeIsOpenInResidents,
  clearSelectResidentsInStore,
  setSelectResidentsToStore,
} from '../../store/locationSlice';
import {RootState} from '../../store';
import {useLayoutEffect} from 'react';

interface CardGameContainerProps {
  cardGameResidents: GameResident[];
}

const CardGameContainer: React.FC<CardGameContainerProps> = ({
  cardGameResidents,
}) => {
  const dispatch = useDispatch();
  const {selectResidents} = useSelector((state: RootState) => state.location);

  const handler = (residentId: string) => {
    selectResidents.includes(residentId)
      ? dispatch(clearSelectResidentsInStore())
      : dispatch(setSelectResidentsToStore(residentId as string));
  };
  useLayoutEffect(() => {
    selectResidents.length === 2 &&
      selectResidents[0].split('-')[0] === selectResidents[1].split('-')[0] &&
      dispatch(changeIsOpenInResidents(selectResidents));
  }, [selectResidents, dispatch]);

  return (
    <View style={styles.cardsContainer}>
      {cardGameResidents?.map(item => (
        <Card cardHandler={handler} cardGameResident={item} key={item.id} />
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
