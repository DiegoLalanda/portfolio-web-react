
import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import type { Project as ProjectType } from '../../types';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { translations } from '../../localization';

const projectData: ProjectType[] = [
  {
    id: 'proj1',
    title: translations.project1Title,
    description: translations.project1Desc,
    images: [
      'https://picsum.photos/seed/proj1img1/600/400',
      'https://picsum.photos/seed/proj1img2/600/400',
      'https://picsum.photos/seed/proj1img3/600/400',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    repoUrl: 'https://github.com/yourusername/project1',
    deployUrl: 'https://project1.example.com',
  },
  {
    id: 'proj2',
    title: translations.project2Title,
    description: translations.project2Desc,
    images: [
      'https://picsum.photos/seed/proj2img1/600/400',
      'https://picsum.photos/seed/proj2img2/600/400',
    ],
    technologies: ['Next.js', 'Firebase', 'Stripe', 'Material UI'],
    repoUrl: 'https://github.com/yourusername/project2',
    // deployUrl: 'https://project2.example.com', // Optional
  },
];

const ProjectCarousel: React.FC<{ images: string[], title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-md flex items-center justify-center text-slate-500">No Image</div>;
  }
  
  return (
    <div className="relative group aspect-video">
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className="w-full h-full rounded-md bg-center bg-cover duration-500 transition-all ease-in-out group-hover:scale-105"
        role="img"
        aria-label={`${title} - image ${currentIndex + 1} of ${images.length}`}
      ></div>
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button 
            onClick={prevSlide} 
            aria-label="Previous image"
            className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            aria-label="Next image"
            className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 transition-colors"
          >
            <FaChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectItem: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { t, language } = useLanguage();
  return (
    <AnimatedCard className="flex flex-col overflow-hidden">
      <ProjectCarousel images={project.images} title={project.title[language]} />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{project.title[language]}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow leading-relaxed">{project.description[language]}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium transition-colors transform hover:scale-105"
            >
              <FaExternalLinkAlt className="mr-1.5" /> {t('viewProject')}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors transform hover:scale-105"
            >
              <FaGithub className="mr-1.5" /> {t('viewRepo')}
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="projects" title={t('projectsTitle')}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {projectData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};