import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import type { Project as ProjectType } from '../../types';
import { translations } from '../../localization';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaEye, FaTimes, FaHandPointer } from 'react-icons/fa';
import { projectImages } from '../../data/projectImages';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCoverflow } from 'swiper/modules';

// --- DATOS DE PROYECTOS (SIN CAMBIOS) ---
const projectData: ProjectType[] = [
  {
    id: 'proj-easy-survey',
    title: translations.projectEasySurveyTitle,
    description: translations.projectEasySurveyDesc,
    images: projectImages.easySurvey,
    technologies: ['TypeScript', 'NestJS', 'Angular', 'PostgreSQL', 'TypeORM', 'TailwindCSS', 'Swagger', 'PM2', 'NGINX'],
    repoUrl: 'https://github.com/DiegoLalanda/encuestas-anonimas',
    deployUrl: 'https://encuestas-anonimas-frontend.onrender.com/',
  },
  {
    id: 'proj-tu-seguro',
    title: translations.projectTuSeguroTitle,
    description: translations.projectTuSeguroDesc,
    images: projectImages.tuSeguroOnline,
    technologies: ['NestJS', 'Angular', 'PostgreSQL', 'TypeORM', 'JWT', 'TailwindCSS', 'Render', 'Neon'],
    repoUrl: 'https://github.com/DiegoLalanda/cotiza-seguro-facil',
    deployUrl: 'https://cotiza-seguro-facil-frontend.onrender.com/',
  },
  {
    id: 'proj-en-un-toke',
    title: translations.projectEnUnTokeTitle,
    description: translations.projectEnUnTokeDesc,
    images: projectImages.enUnToke,
    technologies: ['WordPress', 'WooCommerce', 'Mercado Pago', 'Meta Ads API', 'Marketing Digital'],
    deployUrl: 'https://enuntoke.com/',
  },
  {
    id: 'proj-api-reclamos',
    title: translations.projectApiReclamosTitle,
    description: translations.projectApiReclamosDesc,
    images: projectImages.apiReclamos,
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT', 'Swagger', 'Render', 'Neon'],
    repoUrl: 'https://github.com/DiegoLalanda/api_reclamos_prog3',
    deployUrl: 'https://api-reclamos-prog3.onrender.com/api/v1/api-docs/',
  },
  {
    id: 'proj-verde-nido',
    title: translations.projectVerdeNidoTitle,
    description: translations.projectVerdeNidoDesc,
    images: projectImages.verdeNido,
    technologies: ['React', 'API Rest', 'MySQL', 'CRUD', 'Responsive Design'],
    repoUrl: 'https://github.com/DiegoLalanda/verdeNido--React',
  },
];


// --- COMPONENTE ImageCarousel (SIN CAMBIOS) ---
const ImageCarousel: React.FC<{ images: string[], title: string; isModal?: boolean }> = ({ images, title, isModal = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInteraction = (e: React.MouseEvent, action: 'prev' | 'next' | number) => {
    e.stopPropagation();
    if (action === 'prev') setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    else if (action === 'next') setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    else setCurrentIndex(action);
  };

  if (!images || images.length === 0) return null;

  const containerClasses = isModal ? "w-full h-full" : "relative group aspect-video overflow-hidden rounded-t-lg";

  return (
    <div className={containerClasses}>
      <img src={images[currentIndex]} loading="lazy" alt={`${title} - image ${currentIndex + 1}`} className="w-full h-full object-contain duration-500 transition-all bg-slate-100 dark:bg-slate-900" />
      {images.length > 1 && (
        <>
          <button onClick={(e) => handleInteraction(e, 'prev')} aria-label="Previous image" className={`absolute top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full transition-opacity z-10 ${isModal ? 'left-4 opacity-70 hover:opacity-100' : 'opacity-0 group-hover:opacity-100 left-2'}`}>
            <FaChevronLeft size={isModal ? 24 : 20} />
          </button>
          <button onClick={(e) => handleInteraction(e, 'next')} aria-label="Next image" className={`absolute top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full transition-opacity z-10 ${isModal ? 'right-4 opacity-70 hover:opacity-100' : 'opacity-0 group-hover:opacity-100 right-2'}`}>
            <FaChevronRight size={isModal ? 24 : 20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button key={index} onClick={(e) => handleInteraction(e, index)} aria-label={`Go to image ${index + 1}`} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- COMPONENTE ProjectItem (ACTUALIZADO CON HOVER) ---
const ProjectItem: React.FC<{ project: ProjectType; onOpenModal: () => void }> = ({ project, onOpenModal }) => {
  const { t, language } = useLanguage();
  return (
    // CAMBIO 1: Se añade el efecto de hover
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl flex flex-col overflow-hidden h-full transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <ImageCarousel images={project.images} title={project.title[language]} />
        <button onClick={(e) => { e.stopPropagation(); onOpenModal(); }} className="absolute top-2 right-2 p-2 bg-slate-800/50 text-white rounded-full hover:bg-slate-800/80 transition-all z-10" aria-label="View project details">
          <FaEye />
        </button>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{project.title[language]}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow leading-relaxed">{project.description[language]}</p>
        <div className="mt-auto flex space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.deployUrl && <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"><FaExternalLinkAlt className="mr-1.5" /> {t('viewProject')}</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:underline"><FaGithub className="mr-1.5" /> {t('viewRepo')}</a>}
        </div>
      </div>
    </div>
  );
};


// --- COMPONENTE ProjectModal (SIN CAMBIOS) ---
const ProjectModal: React.FC<{ project: ProjectType | null; onClose: () => void }> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  if (!project) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div onClick={(e) => e.stopPropagation()} className={`bg-slate-100 dark:bg-slate-900 rounded-lg shadow-2xl w-full max-w-md md:max-w-6xl md:h-[70vh] max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-fade-in-up`}>
        <div className="w-full md:w-2/3 flex-shrink-0 flex"><div className="w-full h-64 md:h-full relative"><ImageCarousel images={project.images} title={project.title[language]} isModal={true} /></div></div>
        <div className="p-6 md:p-8 flex flex-col overflow-y-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">{project.title[language]}</h3>
          <p className="text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">{project.description[language]}</p>
          <div className="mb-6"><h4 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3">Technologies:</h4><div className="flex flex-wrap gap-2">{project.technologies.map(tech => (<span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">{tech}</span>))}</div></div>
          <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-slate-300 dark:border-slate-700">{project.deployUrl && <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition-all"><FaExternalLinkAlt className="mr-2" /> {t('viewProject')}</a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg text-slate-600 dark:text-slate-300 hover:bg-slate-700 dark:hover:bg-slate-200 px-6 py-2 rounded-full font-semibold transition-all"><FaGithub className="mr-2" /> {t('viewRepo')}</a>}</div>
        </div>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-50"><FaTimes size={30} /></button>
    </div>
  );
};

// --- COMPONENTE Projects (CON CONFIGURACIÓN RESPONSIVE FINAL) ---
export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <>
      <SectionWrapper id="projects" title={t('projectsTitle')}>
        {/* El `div` que envuelve a Swiper ahora tiene el estilo para la máscara */}
        <div className="relative w-full group"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' // Para compatibilidad con Safari/Webkit
          }}>
          <Swiper
            // CAMBIO 2: Añadimos EffectCoverflow a los módulos
            modules={[A11y, EffectCoverflow]}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            className="!py-8"
            onSliderMove={() => setShowSwipeIndicator(false)}
            onSlideChangeTransitionStart={() => setShowSwipeIndicator(false)}

            // CAMBIO 3: Usamos breakpoints para tener configuraciones DIFERENTES
            // para móvil y escritorio.
            breakpoints={{
              // Configuración para MÓVIL (por defecto, hasta 768px)
              320: {
                slidesPerView: 1.25, // Muestra 1 y un cuarto, para que se vea el "trozo"
                spaceBetween: 15,
                effect: 'slide', // Efecto simple de deslizamiento en móvil
              },
              // Configuración para ESCRITORIO (a partir de 768px)
              768: {
                effect: 'coverflow', // Activamos el efecto coverflow
                slidesPerView: 'auto', // Dejamos que el ancho del slide lo controle
                coverflowEffect: {
                  rotate: 0,
                  stretch: 50, // Espacio entre tarjetas
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                },
              },
            }}
          >
            {projectData.map((project) => (
              <SwiperSlide
                key={project.id}
                // CAMBIO 4: El ancho ahora es diferente para móvil y escritorio
                className="!w-[80%] md:!w-[50%] lg:!w-[40%]"
              >
                {/* La opacidad y escala ahora se aplican solo en escritorio */}
                <div className="md:transition-all md:duration-400 md:group-[.swiper-slide-active]:opacity-100 md:group-[.swiper-slide-active]:scale-100 md:scale-90">
                  <ProjectItem project={project} onOpenModal={() => setSelectedProject(project)} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {showSwipeIndicator && (
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center justify-center">
              <div className="flex items-center justify-center bg-slate-800/80 text-white rounded-full p-3 shadow-lg animate-pulse">
                <FaChevronLeft className="animate-swipe-indicator text-lg" />
                <FaHandPointer className="text-2xl mx-2" />
                <FaChevronRight className="animate-swipe-indicator text-lg" />
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};