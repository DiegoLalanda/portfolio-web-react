import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import type { TimelineItem } from '../../types';
import { translations } from '../../localization';
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaFileDownload } from 'react-icons/fa';

// --- DATOS DE EDUCACIÓN ---
const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: translations.edu1Title,
    institution: translations.edu1Institution,
    logoUrl: 'src/assets/logo-uner.png',
    years: '2023 - En curso',
    description: translations.edu1Description,
    gpa: '9.36',
    courses: [
      { name: translations.courseWebDev, grade: 10 },
      { name: translations.courseArch, grade: 10 },
      { name: translations.courseDB, grade: 9 },
      { name: translations.courseProg3, grade: 8 },
    ],
    certificateUrl: '/certificados/certificado-analitico-uner.pdf'
  },
  {
    id: 'edu2',
    title: translations.edu2Title,
    institution: translations.edu2Institution,
    logoUrl: 'src/assets/logo-isdica.png',
    years: '2019 - 2022',
    description: translations.edu2Description,
    gpa: '9.35',
    courses: [
      { name: translations.courseElecMag, grade: 10 },
      { name: translations.courseQuantum, grade: 10 },
      { name: translations.courseMath2, grade: 10 },
      { name: translations.courseAstrophysics, grade: 10 },
    ],
    certificateUrl: '/certificados/titulo-profesorado-fisica.pdf'
  },
  {
    id: 'edu3',
    title: translations.edu3Title,
    institution: translations.edu3Institution,
    logoUrl: 'src/assets/logo-arg-programa.png',
    years: '2023 - 2024',
    description: translations.edu3Description,
    highlightedCoursesTitle: { en: 'Completed Courses', es: 'Cursos Completados' },
    courses: [
        { name: translations.courseFullStackAP, grade: '2023' },
        { name: translations.courseOdoo, grade: '2024' },
        { name: translations.courseDeploy, grade: '2024' },
        { name: translations.courseDocker, grade: '2024' },
    ],
  },
];

// --- DATOS DE EXPERIENCIA (ACTUALIZADOS) ---
const experienceData: TimelineItem[] = [
  {
    id: 'exp1',
    title: translations.exp1Title,
    institution: translations.exp1Institution,
    // NOTA: Agrega un logo en esta ruta
    logoUrl: 'src/assets/logo-cge.png',
    years: '2023 - Actualidad',
    description: translations.exp1Description,
  },
  {
    id: 'exp2',
    title: translations.exp2Title,
    institution: translations.exp2Institution,
    // NOTA: Agrega un logo en esta ruta
    logoUrl: 'src/assets/logo-diego.png',
    years: '2023',
    description: translations.exp2Description,
  },
  {
    id: 'exp3',
    title: translations.exp3Title,
    institution: translations.exp3Institution,
    // NOTA: Agrega un logo en esta ruta
    logoUrl: 'src/assets/logo-costaciencia.png',
    years: '2022',
    description: translations.exp3Description,
  },
  {
    id: 'exp4',
    title: translations.exp4Title,
    institution: translations.exp4Institution,
    // NOTA: Agrega un logo en esta ruta
    logoUrl: 'src/assets/logo-losgalgos.png',
    years: '2016 - 2022',
    description: translations.exp4Description,
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; icon: React.ReactNode }> = ({ item, icon }) => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const getGradeColor = (grade: number | string) => {
    const numericGrade = typeof grade === 'string' ? parseFloat(grade) : grade;
    if (isNaN(numericGrade)) return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
    if (numericGrade >= 9) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
    if (numericGrade >= 8) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
  };

  return (
    <AnimatedCard className="relative pl-16">
      <div className="absolute left-0 top-6 transform -translate-x-1/2">
        <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-start mb-2">
        {item.logoUrl && (
          <img src={item.logoUrl} alt={`${item.institution[language]} logo`} className="w-10 h-10 rounded-full mr-4 object-contain" />
        )}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{item.title[language]}</h3>
          <p className="text-md text-blue-600 dark:text-blue-400 font-medium">{item.institution[language]}</p>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.years}</p>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{item.description[language]}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 justify-between">
        {(item.gpa || (item.courses && item.courses.length > 0)) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <span>{isExpanded ? t('seeLess') : t('seeMore')}</span>
            <FaChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
        {item.certificateUrl && (
          <a
            href={item.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            <FaFileDownload />
            <span>{t('viewCertificate')}</span>
          </a>
        )}
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="space-y-4">
          {item.gpa && (
            <div className="group">
              <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider">{t('gpaTitle')}</h4>
              <div className="inline-block p-2.5 rounded-lg bg-gradient-to-tr from-blue-500 to-teal-400 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl cursor-pointer">
                <span className="font-bold text-xl tracking-wider">{item.gpa}</span>
              </div>
            </div>
          )}
          {item.courses && item.courses.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">
                {item.highlightedCoursesTitle ? item.highlightedCoursesTitle[language] : t('highlightedCoursesTitle')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 py-1 px-2.5 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:shadow-md hover:-translate-y-px cursor-pointer"
                  >
                    <span className="text-xs text-slate-700 dark:text-slate-300">{course.name[language]}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export const Resume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="resume" title={t('resumeTitle')}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h3 className="font-display text-3xl font-semibold mb-8 text-center md:text-left text-slate-700 dark:text-slate-200">
            {t('educationTitle')}
          </h3>
          <div className="space-y-8 relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 md:pl-0 md:border-l-0">
            {educationData.map((item) => (
              <TimelineCard key={item.id} item={item} icon={<FaGraduationCap size={20} />} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-3xl font-semibold mb-8 text-center md:text-left text-slate-700 dark:text-slate-200">
            {t('experienceTitle')}
          </h3>
          <div className="space-y-8 relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 md:pl-0 md:border-l-0">
            {experienceData.map((item) => (
              <TimelineCard key={item.id} item={item} icon={<FaBriefcase size={20} />} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};