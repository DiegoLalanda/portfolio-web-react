
import React, {type ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200'
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '', delay = '' }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-700/50 rounded-lg p-6 group transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] ${delay} ${className} ${
        isVisible ? 'opacity-100 translate-y-0 transform-gpu' : 'opacity-0 translate-y-8 transform-gpu'
      }`}
    >
      {children}
    </div>
  );
};
