import { createTheme } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const localDarkMode = window.localStorage.getItem('darkMode');
    return localDarkMode === 'true';
  });

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return { theme, toggleTheme };
};
