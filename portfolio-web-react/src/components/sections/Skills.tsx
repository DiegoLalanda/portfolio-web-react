import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type { SkillCategory, Skill, Language } from '../../types';
import { translations } from '../../localization';

// --- ICONOS ---
// Core
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaAngular, FaNodeJs, FaGitAlt, FaPython, FaDocker, FaFigma, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNestjs, SiPostgresql, SiMysql, SiAdobephotoshop } from 'react-icons/si'; // <-- Iconos añadidos
import { GoGear } from 'react-icons/go';
// Soft Skills
import { FaUsers, FaLightbulb, FaComments, FaProjectDiagram, FaChalkboardTeacher, FaSearch, FaHandshake } from 'react-icons/fa';
import { BsRocketTakeoff } from "react-icons/bs";

// --- DATOS DE HABILIDADES (ACTUALIZADOS Y REORGANIZADOS) ---
const skillData: SkillCategory[] = [
    {
      name: translations.hardSkills,
      skills: [
        // --- UI/UX & Design ---
        { name: { en: 'Figma', es: 'Figma' }, icon: FaFigma, level: 75 },
        { name: { en: 'Adobe Photoshop', es: 'Adobe Photoshop' }, icon: SiAdobephotoshop, level: 75 }, // <-- NUEVO

        // --- Frontend Development ---
        { name: { en: 'React', es: 'React' }, icon: FaReact, level: 70 },
        { name: { en: 'Angular', es: 'Angular' }, icon: FaAngular, level: 60 },
        { name: { en: 'JavaScript (ES6+)', es: 'JavaScript (ES6+)' }, icon: FaJsSquare, level: 70 },
        { name: { en: 'TypeScript', es: 'TypeScript' }, icon: SiTypescript, level: 60 },
        { name: { en: 'HTML5', es: 'HTML5' }, icon: FaHtml5, level: 80 },
        { name: { en: 'CSS3', es: 'CSS3' }, icon: FaCss3Alt, level: 70 },
        { name: { en: 'Tailwind CSS', es: 'Tailwind CSS' }, icon: SiTailwindcss, level: 75 },

        // --- Backend Development ---
        { name: { en: 'Node.js', es: 'Node.js' }, icon: FaNodeJs, level: 65 },
        { name: { en: 'NestJS', es: 'NestJS' }, icon: SiNestjs, level: 50 },
        { name: { en: 'Python', es: 'Python' }, icon: FaPython, level: 50 },
        { name: { en: 'REST API Design', es: 'Diseño de APIs REST' }, icon: GoGear, level: 80 },
        
        // --- Databases ---
        { name: { en: 'SQL (PostgreSQL)', es: 'SQL (PostgreSQL)' }, icon: SiPostgresql, level: 60 },
        { name: { en: 'SQL (MySQL)', es: 'SQL (MySQL)' }, icon: SiMysql, level: 70 }, // <-- NUEVO

        // --- DevOps & Tools ---
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

// --- COMPONENTE SkillItem (Sin cambios) ---
const SkillItem: React.FC<{ skill: Skill; language: Language }> = ({ skill, language }) => {
  const Icon = skill.icon;
  
  return (
    <div 
      className={`
        flex-shrink-0 w-64 mx-4 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg 
        flex flex-col items-center justify-center text-center shadow-lg 
        transition-all duration-300 ease-in-out
        group-hover:scale-90 group-hover:opacity-70
        hover:!scale-125 hover:!opacity-100 hover:shadow-2xl hover:z-20
      `}
    >
      {Icon && <Icon className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" />}
      <span className="text-slate-700 dark:text-slate-200 font-semibold text-lg break-words">
        {skill.name[language]}
      </span>
      {skill.level !== undefined && (
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE SkillsCarousel (Sin cambios) ---
const SkillsCarousel: React.FC<{ skills: Skill[]; language: Language; reverse?: boolean }> = ({ skills, language, reverse = false }) => {
  const doubledSkills = [...skills, ...skills];
  
  return (
    <div className="group w-full overflow-hidden relative py-10" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className={`flex items-center w-max ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} group-hover:[animation-play-state:paused]`}>
        {doubledSkills.map((skill, index) => (
          <SkillItem 
            key={`${skill.name.es}-${index}`} 
            skill={skill}
            language={language} 
          />
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL Skills (Sin cambios) ---
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