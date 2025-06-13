
import React, {type ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionWrapperProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  children, 
  className = '', 
  titleClassName = '',
  contentClassName = ''
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 md:py-24 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center ${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 w-full max-w-5xl ${contentClassName}`}>
        {title && (
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-800 dark:text-slate-100 ${titleClassName}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
