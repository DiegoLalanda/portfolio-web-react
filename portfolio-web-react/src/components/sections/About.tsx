
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type { PersonalData, Interest } from '../../types';

// Imports de iconos actualizados
import { FiDownload, FiCode, FiPenTool, FiCpu } from 'react-icons/fi'; // Se cambia FiMusic y FiBookOpen
import { IoGameControllerOutline } from 'react-icons/io5'; // Nuevo import para el icono de Gaming
import { translations } from '../../localization';

const personalDataItems: PersonalData[] = [
  { label: translations.dataAge, value: translations.valueAge },
  { label: translations.dataLocation, value: translations.valueLocation },
  { label: translations.dataEmail, value: translations.valueEmail },
  { label: translations.dataPhone, value: translations.valuePhone },
];

// Array de intereses con los iconos corregidos
const interestsItems: Interest[] = [
  { name: translations.interestCoding, icon: FiCode }, // Correcto: Programar
  { name: translations.interestMusic, icon: FiPenTool }, // Corregido: Diseño
  { name: translations.interestTravel, icon: IoGameControllerOutline }, // Corregido: Gaming
  { name: translations.interestReading, icon: FiCpu }, // Corregido: Ciencia y Tecnología
];

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <SectionWrapper id="about" title={t('aboutTitle')}>
      <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-start">
        <div className="md:col-span-2 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-left md:text-lg">
          <p>{t('aboutDescription1')}</p>
          <p>{t('aboutDescription2')}</p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200">{t('personalDataTitle')}</h3>
            <ul className="space-y-2">
              {personalDataItems.map(item => (
                <li key={item.label[language]} className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-400">{item.label[language]}:</span>
                  <span className="text-slate-500 dark:text-slate-300 text-right">
                    {typeof item.value === 'string' ? item.value : item.value[language]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200">{t('interestsTitle')}</h3>
            <ul className="grid grid-cols-2 gap-3">
              {interestsItems.map(interest => (
                <li key={interest.name[language]} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
                  {interest.icon && <interest.icon className="text-blue-500" />}
                  <span>{interest.name[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          href="src/assets/CV-Web.pdf" // Replace with your actual CV link
          download="Diego-Lalanda-CV.pdf"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900"
        >
          <FiDownload className="mr-2 -ml-1 h-5 w-5" />
          {t('downloadCV')}
        </a>
      </div>
    </SectionWrapper>
  );
};
