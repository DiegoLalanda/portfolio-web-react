import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { type NavLink as NavLinkType, AppLanguages } from '../../types';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { translations } from '../../localization';

// PASO 1: Importar ambas imágenes de logo
import logoDark from '../../assets/logo-portfolio.png';  // Logo para el tema oscuro
import logoLight from '../../assets/Logo-portfolio-2.png'; // Logo para el tema claro

const navLinksData: NavLinkType[] = [
  { id: 'hero', text: translations.navHome },
  { id: 'about', text: translations.navAbout },
  { id: 'resume', text: translations.navResume },
  { id: 'skills', text: translations.navSkills },
  { id: 'projects', text: translations.navProjects },
  { id: 'contact', text: translations.navContact },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
    >
      {children}
    </a>
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                 ${isScrolled || isMobileMenuOpen ? 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="block transition-transform duration-300 hover:scale-105">
          {/* PASO 2: Usar una condición para cambiar el 'src' del logo */}
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt={t('logoText')}
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinksData.map(link => (
            <NavLink key={link.id} href={`#${link.id}`}>{link.text[language]}</NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-3"> {/* <-- CAMBIO 1: Eliminamos el 'group' de aquí */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* CAMBIO 2: Movemos la clase 'group' para que solo envuelva al botón de idioma y su menú */}
          <div className="relative group">
            <button
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 font-medium text-sm"
            >
              {language.toUpperCase()}
            </button>
            {/* Ahora este menú reacciona SOLO al hover de su padre directo */}
            <div className="absolute top-full right-0 mt-2 w-20 bg-white dark:bg-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <button onClick={() => setLanguage(AppLanguages.EN)} className="block w-full text-left px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">EN</button>
              <button onClick={() => setLanguage(AppLanguages.ES)} className="block w-full text-left px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">ES</button>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm py-4 absolute top-20 left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {navLinksData.map(link => (
              <NavLink key={`mobile-${link.id}`} href={`#${link.id}`} onClick={closeMobileMenu}>
                {link.text[language]}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};