import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { IconLink } from '../common/IconLink';
import type { SocialLink } from '../../types';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// Importamos la imagen como un módulo. `profilePhoto` ahora contendrá la URL final.
import profilePhoto from '../../assets/foto-perfil-diego.svg';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/DiegoLalanda', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diego-lalanda-9576b21b8', icon: FaLinkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/lala.dev.tech/', icon: FaInstagram },
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  const animationClass = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-blue-900 py-20 pt-28 md:pt-20 relative overflow-hidden"
    >
      {/* CAMBIO 1: Añadir 'relative' y 'z-10' a este contenedor principal */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className={`mx-auto mb-8 ${animationClass('delay-100')}`}>
          <img
            src={profilePhoto}
            alt={t('heroName')}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto shadow-2xl border-4 border-white dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-500 animate-subtle-bob"
          />
        </div>

        <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 ${animationClass('delay-200')}`}>
          <span className="block text-xl md:text-2xl font-normal text-blue-600 dark:text-blue-400 mb-2">{t('heroGreeting')}</span>
          {t('heroName')}
        </h1>

        <p className={`mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium ${animationClass('delay-300')}`}>
          {t('heroTitle')}
        </p>

        <p className={`mt-6 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed ${animationClass('delay-400')}`}>
          {t('heroDescription')}
        </p>

        <div className={`mt-10 ${animationClass('delay-500')}`}>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{t('heroSocials')}</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(link => (
              <IconLink key={link.name} link={link} />
            ))}
          </div>
        </div>
      </div>
      
      {/* CAMBIO 2: Añadir 'z-0' a este div para que quede por detrás del contenido */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 z-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[150px] 
                     fill-slate-50 dark:fill-slate-900"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};