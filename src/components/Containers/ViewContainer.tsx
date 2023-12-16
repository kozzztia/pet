import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const ViewContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={styles.box}>{children}</View>;
};

export default ViewContainer;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
