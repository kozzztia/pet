import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZES} from '../../../styles';
import { useTheme } from '../../../providers/ThemeProvider';

type ViewContainerTypes = {
  children: React.ReactNode;
  row?: boolean;
};

const ViewContainer: React.FC<ViewContainerTypes> = ({
  children,
  row = false,
}) => {
  const {backgroundThemeColor} = useTheme()
  const direction = row ? 'row' : 'column';
  return (
    <View
      style={{
        ...styles.box,
        flexDirection: direction,
        backgroundColor: backgroundThemeColor,
      }}>
      {children}
    </View>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: SIZES.minComtainerHeight,
    gap: SIZES.gap,
  },
});
