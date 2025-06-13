
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import type { TimelineItem } from '../../types';
import { translations } from '../../localization';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: translations.edu1Title,
    institution: translations.edu1Institution,
    logoUrl: 'https://picsum.photos/seed/unilogo/50/50',
    years: '2018 - 2022',
    description: translations.edu1Description,
  },
  {
    id: 'edu2',
    title: translations.edu2Title,
    institution: translations.edu2Institution,
    logoUrl: 'https://picsum.photos/seed/schoollogo/50/50',
    years: '2022',
    description: translations.edu2Description,
  },
];

const experienceData: TimelineItem[] = [
  {
    id: 'exp1',
    title: translations.exp1Title,
    institution: translations.exp1Institution,
    logoUrl: 'https://picsum.photos/seed/techlogo/50/50',
    years: '2023 - Present',
    description: translations.exp1Description,
  },
  {
    id: 'exp2',
    title: translations.exp2Title,
    institution: translations.exp2Institution,
    logoUrl: 'https://picsum.photos/seed/agencylogo/50/50',
    years: '2022 - 2023',
    description: translations.exp2Description,
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; icon: React.ReactNode }> = ({ item, icon }) => {
  const { language } = useLanguage();
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
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description[language]}</p>
    </AnimatedCard>
  );
};

export const Resume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="resume" title={t('resumeTitle')}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Education Column */}
        <div>
          <h3 className="font-display text-3xl font-semibold mb-8 text-center md:text-left text-slate-700 dark:text-slate-200">
            {t('educationTitle')}
          </h3>
          <div className="space-y-8 relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 md:pl-0 md:border-l-0">
            {/* Vertical line for larger screens can be added here if not using border-l on parent */}
            {educationData.map((item) => (
              <TimelineCard key={item.id} item={item} icon={<FaGraduationCap size={20} />} />
            ))}
          </div>
        </div>

        {/* Experience Column */}
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
