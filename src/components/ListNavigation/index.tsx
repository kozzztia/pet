import * as React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {CustomButton} from '../ui/Buttons';
import {SIZES} from '../../styles';
import {useTheme} from '../../providers/ThemeProvider';

interface ListNavigationProps {
  handler: React.Dispatch<React.SetStateAction<number | null>>;
  isFetching: boolean;
  prev: number | null;
  next: number | null;
}

const ListNavigation: React.FC<ListNavigationProps> = ({
  handler,
  prev,
  next,
  isFetching,
}) => {
  const hasNextPage = !!next;
  const hasPrevPage = !!prev;
  const {navigationThemeColor, backgroundThemeColor} = useTheme();
  return (
    <View style={[styles.controll, {borderTopColor: navigationThemeColor}]}>
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
          isDisabled={isFetching}
          title={
            !isFetching ? (
              'next'
            ) : (
              <ActivityIndicator color={backgroundThemeColor} />
            )
          }
          handler={() => handler(next as number)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  controll: {
    flexDirection: 'row',
    gap: SIZES.gap,
    borderTopWidth: 1,
  },
  btn: {
    flexGrow: 1,
  },
});

export default ListNavigation;
