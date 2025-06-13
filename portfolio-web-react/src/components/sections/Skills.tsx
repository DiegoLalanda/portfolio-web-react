
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type {SkillCategory, Skill } from '../../types';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma, FaUsers, FaLightbulb, FaComments } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss} from 'react-icons/si';
import { translations } from '../../localization';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const skillData: SkillCategory[] = [
  {
    name: translations.hardSkills,
    skills: [
      { name: 'React', icon: FaReact, level: 75 },
      { name: 'JavaScript (ES6+)', icon: FaJsSquare, level: 80 },
      { name: 'TypeScript', icon: SiTypescript, level: 70 },
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS', icon: FaCss3Alt, level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'Node.js', icon: FaNodeJs, level: 70 },
      { name: 'Git & GitHub', icon: FaGitAlt, level: 85 },
      { name: 'Figma', icon: FaFigma, level: 70 },
    ],
  },
  {
    name: translations.softSkills,
    skills: [
      { name: 'Problem Solving', icon: FaLightbulb },
      { name: 'Team Collaboration', icon: FaUsers },
      { name: 'Communication', icon: FaComments },
      { name: 'Creativity' }, // Icon optional
      { name: 'Adaptability' },
    ],
  },
];

const SkillItem: React.FC<{ skill: Skill; isVisible: boolean; index: number }> = ({ skill, isVisible, index }) => {
  const Icon = skill.icon;
  const delay = `delay-${index * 100}`;
  return (
    <div 
      className={`bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-center space-x-3 shadow-md group transition-all duration-500 ease-out hover:shadow-lg hover:scale-105 ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {Icon && <Icon className="w-12 h-12 text-blue-500 dark:text-blue-400 group-hover:animate-pulse" />}
      <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
      {skill.level && (
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 ml-auto overflow-hidden">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
          ></div>
        </div>
      )}
    </div>
  );
};


export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  return (
    <SectionWrapper id="skills" title={t('skillsTitle')}>
      <div ref={ref} className="space-y-12">
        {skillData.map((category) => (
          <div key={category.name[language]}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200">
              {category.name[language]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {category.skills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} isVisible={isVisible} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
