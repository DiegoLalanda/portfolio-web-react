
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IconLink } from '../common/IconLink';
import type { SocialLink } from '../../types';

const footerSocialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/DiegoLalanda', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diego-lalanda-9576b21b8', icon: FaLinkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/diegol_4526', icon: FaInstagram },
];

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 md:px-6 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            {footerSocialLinks.map(link => (
              <IconLink key={`footer-${link.name}`} link={link} />
            ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t('footerText')}
        </p>
         <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
