import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomButton} from '../ui/Buttons';
import {SIZES} from '../../styles';

interface ListNavigationProps {
  handler: React.Dispatch<React.SetStateAction<number | null>>;
  isFetching?: boolean;
  prev?: number | null;
  next?: number | null;
}

const ListNavigation: React.FC<ListNavigationProps> = ({
  handler,
  prev,
  next,
}) => {
  const hasNextPage = !!next;
  const hasPrevPage = !!prev;
  return (
    <View style={styles.controll}>
      {hasPrevPage && (
        <CustomButton
          style={styles.btn}
          title={'prev'}
          handler={() => handler(prev as number)}
        />
      )}
      {hasNextPage && (
        <CustomButton
          style={styles.btn}
          title={'next'}
          handler={() => handler(next as number)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  controll: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 'auto',
    gap: SIZES.gap,
  },
  btn: {
    flexGrow: 1,
  },
});

export default ListNavigation;
