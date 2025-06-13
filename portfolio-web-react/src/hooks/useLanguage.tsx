// src/hooks/useLanguage.tsx

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
// CAMBIO 1: Importar AppLanguages como valor y quitar LocalizedString que no se usa.
import { type Language, AppLanguages } from '../types';
import { translations, type I18nKey } from '../localization';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: I18nKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('portfolio-language') as Language;
      // CAMBIO 2: Usar AppLanguages para la validación.
      if (storedLang && Object.values(AppLanguages).includes(storedLang)) {
        return storedLang;
      }
      
      const browserLang = navigator.language.split('-')[0];
      // CAMBIO 3: Usar AppLanguages para la comparación.
      if (browserLang === AppLanguages.ES) {
        return AppLanguages.ES;
      }
    }
    // CAMBIO 4: Usar AppLanguages como valor por defecto.
    return AppLanguages.EN;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // CAMBIO 5: Lógica de la función `t` simplificada y más segura.
  const t = (key: I18nKey): string => {
    const translation = translations[key];

    // Primero, manejamos el caso en que la traducción es una simple cadena (como email).
    if (typeof translation === 'string') {
      return translation;
    }

    // Si no es un string, TypeScript sabe que es un objeto LocalizedString.
    // Como 'language' es 'en' o 'es', esta operación es segura y no necesita fallback.
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};