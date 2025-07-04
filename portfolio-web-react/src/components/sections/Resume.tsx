import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import type { TimelineItem } from '../../types';
import { translations } from '../../localization';
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaFileDownload } from 'react-icons/fa';
// --- ¡IMPORATAMOS TODOS LOS LOGOS NECESARIOS! ---
import logoUner from '../../assets/logo-uner.png';
import logoIsdica from '../../assets/logo-isdica.png';
import logoArgPrograma from '../../assets/logo-arg-programa.png';
import logoTuSeguro from '../../assets/logo-tu-seguro-online.png';
import logoEnUnToke from '../../assets/logo-en-un-toke.png';
import logoEasySurvey from '../../assets/logo-easy-survey.jpg';
import logoCge from '../../assets/logo-cge.png';

// --- DATOS DE EDUCACIÓN (CON CERTIFICADOS) ---
const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: translations.edu1Title,
    institution: translations.edu1Institution,
    logoUrl: logoUner,
    years: '2023 - 2025',
    description: translations.edu1Description,
    gpa: '9.36',
    courses: [
      { name: translations.courseWebDev, grade: 10 },
      { name: translations.courseArch, grade: 10 },
      { name: translations.courseDB, grade: 9 },
      { name: translations.courseProg3, grade: 8 },
    ],
    // ENLACE AL CERTIFICADO DE LA UNER
    certificateUrl: 'https://drive.google.com/file/d/1nZbRoBBFcbdSjEyIgm7hQrLnYC-l45Cc/view?usp=sharing'
  },
  {
    id: 'edu2',
    title: translations.edu2Title,
    institution: translations.edu2Institution,
    logoUrl: logoIsdica,
    years: '2019 - 2022',
    description: translations.edu2Description,
    gpa: '9.35',
    courses: [
      { name: translations.courseElecMag, grade: 10 },
      { name: translations.courseQuantum, grade: 10 },
      { name: translations.courseMath2, grade: 10 },
      { name: translations.courseAstrophysics, grade: 10 },
    ],
    // ENLACE AL CERTIFICADO DEL PROFESORADO
    certificateUrl: 'https://drive.google.com/file/d/1iWjRxQ1N0O8s7JiG97jwTwhTpMvwTB6d/view?usp=sharing'
  },
  {
    id: 'edu3',
    title: translations.edu3Title,
    institution: translations.edu3Institution,
    logoUrl: logoArgPrograma,
    years: '2023 - 2025',
    description: translations.edu3Description,
    highlightedCoursesTitle: { en: 'Completed Courses', es: 'Cursos Completados' },
    courses: [
      { name: translations.courseFullStackAP, grade: '2023' },
      { name: translations.courseOdoo, grade: '2024' },
      { name: translations.courseDeploy, grade: '2024' },
      { name: translations.courseDocker, grade: '2024' },
    ],
    // ENLACE A LA CARPETA DE CERTIFICADOS MÚLTIPLES
    certificateUrl: 'https://drive.google.com/drive/folders/19eqXW5I5aF3tGGyM3zyh3FUHdXISSYUR?usp=sharing'
  },
];

// --- DATOS DE EXPERIENCIA (¡REESTRUCTURADOS Y MEJORADOS!) ---
const experienceData: TimelineItem[] = [
  {
    id: 'exp1',
    title: translations.exp1Title,
    institution: translations.exp1Institution,
    logoUrl: logoTuSeguro, // <-- RECUERDA AÑADIR UN LOGO
    years: '2025',
    description: translations.exp1Description,
    highlightedCoursesTitle: { en: 'Key Technologies', es: 'Tecnologías Clave' },
    courses: [ // Usaremos 'courses' para mostrar tecnologías
      { name: { en: 'NestJS', es: 'NestJS' }, grade: 'Backend' },
      { name: { en: 'Angular', es: 'Angular' }, grade: 'Frontend' },
      { name: { en: 'PostgreSQL', es: 'PostgreSQL' }, grade: 'DB' },
      { name: { en: 'TypeORM', es: 'TypeORM' }, grade: 'ORM' },
      { name: { en: 'JWT Auth', es: 'JWT Auth' }, grade: 'Security' },
      { name: { en: 'Render & Neon', es: 'Render & Neon' }, grade: 'Deploy' },
    ]
  },
  {
    id: 'exp2',
    title: translations.exp2Title,
    institution: translations.exp2Institution,
    logoUrl: logoEnUnToke, // <-- RECUERDA AÑADIR UN LOGO
    years: '2025',
    description: translations.exp2Description,
    highlightedCoursesTitle: { en: 'Key Integrations', es: 'Integraciones Clave' },
    courses: [
      { name: { en: 'WordPress', es: 'WordPress' }, grade: 'CMS' },
      { name: { en: 'WooCommerce', es: 'WooCommerce' }, grade: 'E-commerce' },
      { name: { en: 'Mercado Pago', es: 'Mercado Pago' }, grade: 'Gateway' },
      { name: { en: 'Meta Pixel & API', es: 'Meta Pixel & API' }, grade: 'Marketing' },
    ]
  },
  {
    id: 'exp3',
    title: translations.exp3Title,
    institution: translations.exp3Institution,
    logoUrl: logoEasySurvey, // <-- RECUERDA AÑADIR UN LOGO
    years: '2025',
    description: translations.exp3Description,
    highlightedCoursesTitle: { en: 'Tech Stack', es: 'Stack Tecnológico' },
    courses: [
      { name: { en: 'NestJS', es: 'NestJS' }, grade: 'Backend' },
      { name: { en: 'Angular', es: 'Angular' }, grade: 'Frontend' },
      { name: { en: 'PostgreSQL', es: 'PostgreSQL' }, grade: 'DB' },
      { name: { en: 'Render & Neon', es: 'Render & Neon' }, grade: 'Deploy' },
      { name: { en: 'TypeORM', es: 'TypeORM' }, grade: 'ORM' }
    ]
  },
  {
    id: 'exp4',
    title: translations.exp4Title,
    institution: translations.exp4Institution,
    logoUrl: logoCge,
    years: '2023 - Actualidad',
    description: translations.exp4Description,
    highlightedCoursesTitle: { en: 'Transferred Skills', es: 'Habilidades Transferidas' },
    courses: [ // Reutilizamos 'courses' para las habilidades blandas
      { name: { en: 'Complex Communication', es: 'Comunicación Compleja' }, grade: 'Soft Skill' },
      { name: { en: 'Project Planning', es: 'Planificación' }, grade: 'Soft Skill' },
      { name: { en: 'Team Leadership', es: 'Liderazgo' }, grade: 'Soft Skill' },
    ]
  },
];

// --- TimelineCard (AHORA ES MÁS INTELIGENTE) ---
const TimelineCard: React.FC<{ item: TimelineItem; icon: React.ReactNode }> = ({ item, icon }) => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determina el color basado en el tipo de 'grade' (calificación, año o tipo de skill)
  const getBadgeColor = (grade: number | string) => {
    if (typeof grade === 'number' || !isNaN(parseFloat(grade))) {
      const numericGrade = typeof grade === 'string' ? parseFloat(grade) : grade;
      if (numericGrade >= 9) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      if (numericGrade >= 8) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    }
    // Para badges de texto como 'Backend', 'Frontend', 'Soft Skill'
    switch (grade.toLowerCase()) {
      case 'backend': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'frontend': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'db': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'security': return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
      case 'deploy': return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      case 'marketing': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'soft skill': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
    }
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
          <img src={item.logoUrl} alt={`${item.institution[language]} logo`} loading="lazy" className="w-10 h-10 rounded-full mr-4 object-contain bg-white" />
        )}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{item.title[language]}</h3>
          <p className="text-md text-blue-600 dark:text-blue-400 font-medium">{item.institution[language]}</p>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.years}</p>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{item.description[language]}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 justify-between">
        {/* Ahora el botón "Ver más" se muestra si hay GPA o la lista de "cursos" (tecnologías/habilidades) */}
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
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getBadgeColor(course.grade)}`}>
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

// --- Resume (Componente principal) ---
export const Resume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="resume" title={t('resumeTitle')}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h3 className="font-display text-3xl font-semibold mb-8 text-center md:text-left text-slate-700 dark:text-slate-200">
            {t('experienceTitle')}
          </h3>
          <div className="space-y-8 relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 md:pl-0 md:border-l-0">
            {/* Cambiado el orden: ahora experiencia va primero en pantallas pequeñas */}
            {experienceData.map((item) => (
              <TimelineCard key={item.id} item={item} icon={<FaBriefcase size={20} />} />
            ))}
          </div>
        </div>
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
      </div>
    </SectionWrapper>
  );
};