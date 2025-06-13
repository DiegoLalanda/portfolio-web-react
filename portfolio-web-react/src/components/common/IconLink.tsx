
import React from 'react';
import type { SocialLink } from '../../types';

interface IconLinkProps {
  link: SocialLink;
}

export const IconLink: React.FC<IconLinkProps> = ({ link }) => {
  const IconComponent = link.icon;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.name}
      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    >
      <IconComponent size={28} className="transform hover:scale-125 transition-transform duration-300" />
    </a>
  );
};
