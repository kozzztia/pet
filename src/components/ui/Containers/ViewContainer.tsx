import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZES} from '../../../styles';

type ViewContainerTypes = {
  children: React.ReactNode;
  row?: boolean;
};

const ViewContainer: React.FC<ViewContainerTypes> = ({
  children,
  row = false,
}) => {
  const direction = row ? 'row' : 'column';
  return (
    <View
      style={{
        ...styles.box,
        flexDirection: direction,
      }}>
      {children}
    </View>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: SIZES.minComtainerHeight,
    gap: SIZES.gap,
  },
});
