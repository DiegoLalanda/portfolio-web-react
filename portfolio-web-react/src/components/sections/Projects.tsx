import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type { Project as ProjectType } from '../../types';
import { translations } from '../../localization';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// CAMBIO 1: Importamos FreeMode y eliminamos EffectCoverflow y Navigation por ahora.
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Autoplay } from 'swiper/modules';

// --- DATOS DE PROYECTOS (SIN CAMBIOS) ---
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
  },
  {
    id: 'proj3',
    title: { en: 'E-commerce "En un Toke"', es: 'E-commerce "En un Toke"' },
    description: { en: 'Full e-commerce site with payment gateway integration, shipping logistics, and advanced ad tracking via Meta Pixel.', es: 'E-commerce completo con integración de pasarela de pagos, logística de envíos y seguimiento avanzado de publicidad con Píxel de Meta.' },
    images: [
      'https://picsum.photos/seed/proj3img1/600/400',
      'https://picsum.photos/seed/proj3img2/600/400',
    ],
    technologies: ['WordPress', 'WooCommerce', 'Mercado Pago', 'PHP'],
    deployUrl: 'https://project3.example.com',
  },
];


// --- COMPONENTE ImageCarousel (ACTUALIZADO CON DOTS) ---
const ImageCarousel: React.FC<{ images: string[], title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detenemos la propagación para que el Swiper principal no se mueva
  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };
  
  // Detenemos la propagación también en los dots
  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group aspect-video overflow-hidden rounded-t-lg">
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className="w-full h-full bg-center bg-cover duration-500 transition-all"
        role="img"
        aria-label={`${title} - image ${currentIndex + 1} of ${images.length}`}
      ></div>
      {images.length > 1 && (
        <>
          {/* Botones de Navegación (Flechas) */}
          <button 
            onClick={handlePrevClick} 
            aria-label="Previous image"
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-black/40 text-white rounded-full transition-opacity z-10"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNextClick}
            aria-label="Next image"
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-black/40 text-white rounded-full transition-opacity z-10"
          >
            <FaChevronRight size={20} />
          </button>

          {/* --- INICIO DEL CAMBIO: PUNTOS DE PAGINACIÓN --- */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => handleDotClick(e, index)}
                aria-label={`Go to image ${index + 1}`}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}
                `}
              />
            ))}
          </div>
          {/* --- FIN DEL CAMBIO --- */}
        </>
      )}
    </div>
  );
};

// --- COMPONENTE ProjectItem (CON EFECTO HOVER MEJORADO) ---
const ProjectItem: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { t, language } = useLanguage();
  return (
    // CAMBIO 2: Añadimos un efecto de hover sutil para la interacción manual
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl flex flex-col overflow-hidden h-full transition-transform duration-300 ">
      <ImageCarousel images={project.images} title={project.title[language]} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{project.title[language]}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow leading-relaxed">{project.description[language]}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.deployUrl && (
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium transition-colors">
              <FaExternalLinkAlt className="mr-1.5" /> {t('viewProject')}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors">
              <FaGithub className="mr-1.5" /> {t('viewRepo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE Projects (REESTRUCTURADO CON FREEMODE) ---
export const Projects: React.FC = () => {
  const { t } = useLanguage();
  // CAMBIO 3: Duplicamos la data para el bucle manual
  const loopedProjectData = [...projectData, ...projectData];

  return (
    <SectionWrapper id="projects" title={t('projectsTitle')}>
      {/* Usamos una máscara para el efecto de fade en los bordes */}
      <div className="w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)' }}>
        <Swiper
          modules={[FreeMode, A11y, Autoplay]}
          loop={true} // El loop ahora es para el autoplay
          slidesPerView={'auto'}
          spaceBetween={30} // Espacio entre slides
          freeMode={true} // Permite el deslizamiento libre
          autoplay={{
            delay: 1, // Delay casi nulo
            disableOnInteraction: false, // El autoplay no se detiene
          }}
          speed={5000} // Velocidad de la transición (más alto = más lento)
          className="!py-4"
        >
          {loopedProjectData.map((project, index) => (
            <SwiperSlide 
              key={`${project.id}-${index}`} 
              className="!w-[80%] sm:!w-[60%] md:!w-[50%] lg:!w-[42%]"
            >
              <ProjectItem project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};