import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useTheme} from '../../providers/ThemeProvider';
import {COLORS} from '../../styles';

const LoginButton: React.FC = () => {
  const {changeMode, dark} = useTheme();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => changeMode((prev: boolean) => !prev)}>
      <Text style={styles.buttonText}>{dark ? 'dark' : 'light'}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.decorColor,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
