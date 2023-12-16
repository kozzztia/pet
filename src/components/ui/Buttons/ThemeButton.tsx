import * as React from 'react';
import {useTheme} from '../../../providers/ThemeProvider';
import CustomButton from './CustomButton';

const ThemeButton: React.FC = () => {
  const {changeMode, dark} = useTheme();
  return (
    <CustomButton
      title={dark ? 'dark' : 'light'}
      handler={() => changeMode((prev: boolean) => !prev)}
    />
  );
};

export default ThemeButton;
