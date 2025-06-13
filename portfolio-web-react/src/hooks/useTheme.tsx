// src/hooks/useTheme.tsx

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
// ¡CAMBIO CLAVE #1: Importa tanto el TIPO como el VALOR!
import { type Theme, AppThemes } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('portfolio-theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      // ¡CAMBIO CLAVE #2: Usa AppThemes para obtener los valores!
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? AppThemes.DARK 
        : AppThemes.LIGHT;
    }
    // ¡CAMBIO CLAVE #3: Usa AppThemes para el valor por defecto!
    return AppThemes.LIGHT; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // ¡CAMBIO CLAVE #4: Usa AppThemes para la comparación!
    if (theme === AppThemes.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // ¡CAMBIO CLAVE #5: Usa AppThemes en toda la lógica!
    setTheme((prevTheme) => (prevTheme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};