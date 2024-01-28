import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {GameResident} from '../../types/residentType';
import Card from './Card';
import {
  changeIsOpenInGameResidentById,
  closeAllIsOpenInGameResidents,
} from '../../store/locationSlice';
import {useDispatch} from 'react-redux';

interface CardGameContainerProps {
  cardGameResidents: GameResident[];
}

const CardGameContainer: React.FC<CardGameContainerProps> = ({
  cardGameResidents,
}) => {
  const dispatch = useDispatch();

  const handleChangeIsOpen = (residentId: string) => {
    dispatch(changeIsOpenInGameResidentById(residentId));
  };
  return (
    <View style={styles.cardsContainer}>
      {cardGameResidents?.map(item => (
        <Card key={item.id} resident={item} handleIsOpen={handleChangeIsOpen} />
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
