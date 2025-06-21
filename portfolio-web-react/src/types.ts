// En lugar de enums, usamos tipos de unión literal
export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark';

// Opcional: si quieres seguir usando la sintaxis Language.EN, 
// puedes crear un objeto congelado para los valores.
export const AppLanguages = {
  EN: 'en',
  ES: 'es',
} as const;

export const AppThemes = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export interface LocalizedString {
  en: string;
  es: string;
}

export interface NavLink {
  id: string;
  text: LocalizedString;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType; // For React Icons
}

export interface PersonalData {
  label: LocalizedString;
  value: LocalizedString | string; // Value can also be localized
}

export interface Interest {
  name: LocalizedString;
  icon?: React.ElementType;
}

// Nuevo tipo para las materias
export interface Course {
  name: LocalizedString;
  grade: number | string;
}

export interface TimelineItem {
  id: string;
  title: LocalizedString;
  institution: LocalizedString;
  logoUrl?: string;
  years: string;
  description: LocalizedString;
  gpa?: string; // Campo opcional para el promedio
  courses?: Course[]; // Campo opcional para la lista de materias
  certificateUrl?: string;
  highlightedCoursesTitle?: LocalizedString; // <-- LÍNEA AÑADIDA
}

export interface SkillCategory {
  name: LocalizedString;
  skills: Skill[];
}

export interface Skill {
  name: LocalizedString;
  level?: number; // Optional: 1-5 or 1-100 for proficiency
  icon?: React.ElementType;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  images: string[]; // URLs to images or video placeholders
  technologies: string[];
  repoUrl?: string;
  deployUrl?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}