import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type { SkillCategory, Skill, Language } from '../../types';
import { translations } from '../../localization';

// CAMBIO 1: Importamos Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// --- ICONOS Y DATOS (SIN CAMBIOS) ---
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaAngular, FaNodeJs, FaGitAlt, FaPython, FaDocker, FaFigma, FaWordpress, FaUsers, FaLightbulb, FaComments, FaProjectDiagram, FaChalkboardTeacher, FaSearch, FaHandshake } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNestjs, SiPostgresql, SiMysql, SiAdobephotoshop } from 'react-icons/si';
import { GoGear } from 'react-icons/go';
import { BsRocketTakeoff } from "react-icons/bs";

const skillData: SkillCategory[] = [
    {
      name: translations.hardSkills,
      skills: [
        { name: { en: 'Figma', es: 'Figma' }, icon: FaFigma, level: 75 },
        { name: { en: 'Adobe Photoshop', es: 'Adobe Photoshop' }, icon: SiAdobephotoshop, level: 75 },
        { name: { en: 'React', es: 'React' }, icon: FaReact, level: 70 },
        { name: { en: 'Angular', es: 'Angular' }, icon: FaAngular, level: 60 },
        { name: { en: 'JavaScript (ES6+)', es: 'JavaScript (ES6+)' }, icon: FaJsSquare, level: 70 },
        { name: { en: 'TypeScript', es: 'TypeScript' }, icon: SiTypescript, level: 60 },
        { name: { en: 'HTML5', es: 'HTML5' }, icon: FaHtml5, level: 80 },
        { name: { en: 'CSS3', es: 'CSS3' }, icon: FaCss3Alt, level: 70 },
        { name: { en: 'Tailwind CSS', es: 'Tailwind CSS' }, icon: SiTailwindcss, level: 75 },
        { name: { en: 'Node.js', es: 'Node.js' }, icon: FaNodeJs, level: 65 },
        { name: { en: 'NestJS', es: 'NestJS' }, icon: SiNestjs, level: 50 },
        { name: { en: 'Python', es: 'Python' }, icon: FaPython, level: 50 },
        { name: { en: 'REST API Design', es: 'Diseño de APIs REST' }, icon: GoGear, level: 80 },
        { name: { en: 'SQL (PostgreSQL)', es: 'SQL (PostgreSQL)' }, icon: SiPostgresql, level: 60 },
        { name: { en: 'SQL (MySQL)', es: 'SQL (MySQL)' }, icon: SiMysql, level: 70 },
        { name: { en: 'Git & GitHub', es: 'Git & GitHub' }, icon: FaGitAlt, level: 80 },
        { name: { en: 'Docker', es: 'Docker' }, icon: FaDocker, level: 40 },
        { name: { en: 'WordPress/WooCommerce', es: 'WordPress/WooCommerce' }, icon: FaWordpress, level: 60 },
      ],
    },
    {
      name: translations.softSkills,
      skills: [
        { name: { en: 'Problem Solving', es: 'Resolución de Problemas' }, icon: FaLightbulb },
        { name: { en: 'Team Collaboration', es: 'Colaboración en Equipo' }, icon: FaUsers },
        { name: { en: 'Effective Communication', es: 'Comunicación Efectiva' }, icon: FaComments },
        { name: { en: 'Project Management', es: 'Gestión de Proyectos' }, icon: FaProjectDiagram },
        { name: { en: 'Leadership & Mentoring', es: 'Liderazgo y Mentoría' }, icon: FaChalkboardTeacher },
        { name: { en: 'Proactivity', es: 'Proactividad' }, icon: BsRocketTakeoff },
        { name: { en: 'Attention to Detail', es: 'Atención al Detalle' }, icon: FaSearch },
        { name: { en: 'Customer Focus', es: 'Foco en el Cliente' }, icon: FaHandshake },
      ],
    },
];

// --- COMPONENTE SkillItem (SIN CAMBIOS) ---
const SkillItem: React.FC<{ skill: Skill; language: Language }> = ({ skill, language }) => {
  const Icon = skill.icon;
  return (
    <div className={`flex-shrink-0 w-64 mx-4 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl group-hover:z-10`}>
      {Icon && <Icon className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" />}
      <span className="text-slate-700 dark:text-slate-200 font-semibold text-lg break-words">{skill.name[language]}</span>
      {skill.level !== undefined && ( <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-3 overflow-hidden"><div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div></div>)}
    </div>
  );
};

// --- COMPONENTE SkillsCarousel (REHECHO CON SWIPER) ---
const SkillsCarousel: React.FC<{ skills: Skill[]; language: Language; reverse?: boolean }> = ({ skills, language, reverse = false }) => {
  return (
    // CAMBIO 2: Usamos Swiper en lugar de la animación CSS
    <div className="w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView={'auto'} // Permite que cada slide tenga su propio ancho
        spaceBetween={0} // Sin espacio, ya que SkillItem tiene su propio margen
        freeMode={true} // Permite el deslizamiento libre
        grabCursor={true}
        
        // Configuración del Autoplay para emular el marquee
        autoplay={{
          delay: 1, // Un delay casi nulo para un movimiento constante
          disableOnInteraction: false, // El autoplay NO se detiene si el usuario interactúa
          reverseDirection: reverse, // Invierte la dirección para la segunda fila
        }}
        
        speed={10000} // Velocidad de la transición (un número alto crea un scroll lento y suave)
        className="!py-10" // Padding vertical para el efecto hover
      >
        {/* Duplicamos los slides para asegurar un bucle visualmente infinito */}
        {[...skills, ...skills].map((skill, index) => (
          <SwiperSlide key={`${skill.name.es}-${index}`} className="!w-auto group">
            <SkillItem 
              skill={skill}
              language={language} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL Skills (SIN CAMBIOS) ---
export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <SectionWrapper id="skills" title={t('skillsTitle')}>
      <div className="space-y-8">
        {skillData.map((category, index) => (
          <div key={category.name[language]} className="flex flex-col items-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2 text-slate-700 dark:text-slate-200">
              {category.name[language]}
            </h3>
            <SkillsCarousel 
              skills={category.skills} 
              language={language}
              reverse={index % 2 !== 0}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};