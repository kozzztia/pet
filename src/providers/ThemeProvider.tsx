import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import {useColorScheme} from 'react-native';
import {COLORS} from '../styles';

type changeModeType = Dispatch<SetStateAction<boolean>>;

interface Theme {
  backgroundThemeColor: string;
  navigationThemeColor: string;
  titleThemeColor: string;
  dark: boolean;
  changeMode: changeModeType;
}

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);
  const theme: Theme = darkMode
    ? {
        backgroundThemeColor: COLORS.darkBackground,
        navigationThemeColor: COLORS.darkNavigation,
        titleThemeColor: COLORS.darkTitle,
        dark: darkMode,
        changeMode: setDarkMode,
      }
    : {
        backgroundThemeColor: COLORS.lightBackground,
        navigationThemeColor: COLORS.lightNavigation,
        titleThemeColor: COLORS.lightTitle,
        dark: darkMode,
        changeMode: setDarkMode,
      };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
