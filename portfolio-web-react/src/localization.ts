import type { LocalizedString } from "./types";

export interface AppStrings {
  // Header
  navHome: LocalizedString;
  navAbout: LocalizedString;
  navResume: LocalizedString;
  navSkills: LocalizedString;
  navProjects: LocalizedString;
  navContact: LocalizedString;
  logoText: LocalizedString;

  // Hero
  heroGreeting: LocalizedString;
  heroName: LocalizedString;
  heroTitle: LocalizedString;
  heroDescription: LocalizedString;
  heroSocials: LocalizedString;

  // About
  aboutTitle: LocalizedString;
  aboutDescription1: LocalizedString;
  aboutDescription2: LocalizedString;
  personalDataTitle: LocalizedString;
  interestsTitle: LocalizedString;
  downloadCV: LocalizedString;
  dataAge: LocalizedString;
  dataLocation: LocalizedString;
  dataEmail: LocalizedString;
  dataPhone: LocalizedString;
  valueAge: LocalizedString;
  valueLocation: LocalizedString;
  valueEmail: string;
  valuePhone: string;
  interestCoding: LocalizedString;
  interestMusic: LocalizedString;
  interestTravel: LocalizedString;
  interestReading: LocalizedString;

  // Resume
  resumeTitle: LocalizedString;
  educationTitle: LocalizedString;
  experienceTitle: LocalizedString;
  gpaTitle: LocalizedString;
  highlightedCoursesTitle: LocalizedString;
  viewCertificate: LocalizedString;
  seeMore: LocalizedString;
  seeLess: LocalizedString;

  // Education Items
  edu1Title: LocalizedString;
  edu1Institution: LocalizedString;
  edu1Description: LocalizedString;
  edu2Title: LocalizedString;
  edu2Institution: LocalizedString;
  edu2Description: LocalizedString;
  edu3Title: LocalizedString;
  edu3Institution: LocalizedString;
  edu3Description: LocalizedString;

  // Claves para nombres de materias y cursos
  courseWebDev: LocalizedString;
  courseArch: LocalizedString;
  courseDB: LocalizedString;
  courseProg3: LocalizedString;
  courseElecMag: LocalizedString;
  courseQuantum: LocalizedString;
  courseMath2: LocalizedString;
  courseAstrophysics: LocalizedString;
  courseFullStackAP: LocalizedString;
  courseOdoo: LocalizedString;
  courseDeploy: LocalizedString;
  courseDocker: LocalizedString;

  // Experience Items (NUEVOS)
  exp1Title: LocalizedString;
  exp1Institution: LocalizedString;
  exp1Description: LocalizedString;
  exp2Title: LocalizedString;
  exp2Institution: LocalizedString;
  exp2Description: LocalizedString;
  exp3Title: LocalizedString;
  exp3Institution: LocalizedString;
  exp3Description: LocalizedString;
  exp4Title: LocalizedString;
  exp4Institution: LocalizedString;
  exp4Description: LocalizedString;

  // Skills
  skillsTitle: LocalizedString;
  hardSkills: LocalizedString;
  softSkills: LocalizedString;

  // Projects
  projectsTitle: LocalizedString;
  viewProject: LocalizedString;
  viewRepo: LocalizedString;
  project1Title: LocalizedString;
  project1Desc: LocalizedString;
  project2Title: LocalizedString;
  project2Desc: LocalizedString;
  projectEasySurveyTitle: LocalizedString;
  projectEasySurveyDesc: LocalizedString;
  projectTuSeguroTitle: LocalizedString;
  projectTuSeguroDesc: LocalizedString;
  projectVerdeNidoTitle: LocalizedString;
  projectVerdeNidoDesc: LocalizedString;
  projectApiReclamosTitle: LocalizedString;
  projectApiReclamosDesc: LocalizedString;
  projectEnUnTokeTitle: LocalizedString;
  projectEnUnTokeDesc: LocalizedString;


  // Contact
  contactTitle: LocalizedString;
  contactSubtitle: LocalizedString;
  formName: LocalizedString;
  formEmail: LocalizedString;
  formMessage: LocalizedString;
  formSend: LocalizedString;
  formSuccess: LocalizedString;
  formError: LocalizedString;
  mapDescription: LocalizedString;

  // Footer
  footerText: LocalizedString;
}

export const translations: AppStrings = {
  // Header
  navHome: { en: 'Home', es: 'Inicio' },
  navAbout: { en: 'About', es: 'Acerca de' },
  navResume: { en: 'Resume', es: 'Resume' },
  navSkills: { en: 'Skills', es: 'Habilidades' },
  navProjects: { en: 'Projects', es: 'Proyectos' },
  navContact: { en: 'Contact', es: 'Contacto' },
  logoText: { en: 'Diego Lalanda', es: 'Diego Lalanda' },

  // Hero
  heroGreeting: { en: 'Hello, I am', es: '¡Hola! soy' },
  heroName: { en: 'Diego Lalanda', es: 'Diego Lalanda' },
  heroTitle: { en: 'Full-Stack Web Developer', es: 'Desarrollador Web Full-Stack' },
  heroDescription: {
    en: 'I build complete, intuitive, and high-performance web applications, with a strong focus on UI/UX design and scalable backend architecture.',
    es: 'Construyo aplicaciones web completas, intuitivas y de alto rendimiento, con un fuerte enfoque en el diseño UI/UX y la arquitectura backend escalable.'
  },
  heroSocials: { en: 'Find me on', es: 'Encuéntrame en' },

  // About
  aboutTitle: { en: 'About Me', es: 'Acerca De Mí' },
  aboutDescription1: {
    en: 'Hello! I\'m Diego, a Full Stack Developer passionate about turning ideas into functional and aesthetically pleasing digital solutions. My main strength is front-end design, using tools like Figma and technologies like React and Angular to create engaging user experiences.',
    es: '¡Hola! Soy Diego, un Desarrollador Full Stack apasionado por transformar ideas en soluciones digitales funcionales y estéticamente agradables. Mi principal fortaleza es el diseño front-end, utilizando herramientas como Figma y tecnologías como React y Angular para crear experiencias de usuario atractivas.'
  },
  aboutDescription2: {
    en: 'I also have strong skills in backend development with Node.js and NestJS, database design (MySQL, PostgreSQL), and software engineering principles like UML and agile methodologies. I am a proactive, detail-oriented professional, currently advancing my studies in the University Technician program in Web Development at UNER.',
    es: 'También controlo con solidez el desarrollo backend con Node.js y NestJS, el diseño de bases de datos (MySQL, PostgreSQL) y los principios de ingeniería de software como UML y metodologías ágiles. Soy un profesional proactivo y detallista, actualmente avanzando en mis estudios en la Tecnicatura Universitaria en Desarrollo Web en UNER.'
  },
  personalDataTitle: { en: 'Personal Details', es: 'Datos Personales' },
  interestsTitle: { en: 'Interests', es: 'Intereses' },
  downloadCV: { en: 'Download CV', es: 'Descargar CV' },
  dataAge: { en: 'Birthday', es: 'Cumpleaños' },
  dataLocation: { en: 'Address', es: 'Dirección' },
  dataEmail: { en: 'Email', es: 'Email' },
  dataPhone: { en: 'Phone', es: 'Teléfono' },
  valueAge: { en: '11/29/1997', es: '29/11/1997' },
  valueLocation: { en: 'Concordia, Entre Ríos, Argentina.', es: 'Concordia, Entre Ríos, Argentina.' },
  valueEmail: 'lala.dev.tech@hotmail.com',
  valuePhone: '+54 345 6023111',
  interestCoding: { en: 'Coding', es: 'Programar' },
  interestMusic: { en: 'Design', es: 'Diseño' },
  interestTravel: { en: 'Gaming', es: 'Gaming' },
  interestReading: { en: 'Cience & Technology', es: 'Ciencia y Tecnología' },

  // Resume
  resumeTitle: { en: 'Resume', es: 'Curriculum' },
  educationTitle: { en: 'Education', es: 'Educación' },
  experienceTitle: { en: 'Experience', es: 'Experiencia' },
  gpaTitle: { en: 'Final GPA', es: 'Promedio Final' },
  highlightedCoursesTitle: { en: 'Highlighted Courses', es: 'Materias Destacadas' },
  seeMore: { en: 'See details', es: 'Ver detalles' },
  seeLess: { en: 'Hide details', es: 'Ocultar detalles' },
  viewCertificate: { en: 'View Certificate', es: 'Ver Título' },

  // Education Items
  edu1Title: { en: 'University Technician in Web Development', es: 'Tecnicatura Universitaria en Desarrollo Web' },
  edu1Institution: { en: 'UNER - Universidad Nacional de Entre Ríos', es: 'UNER - Universidad Nacional de Entre Ríos' },
  edu1Description: {
    en: 'Ongoing studies covering the full software development lifecycle. The curriculum includes Software Engineering, Databases, Web Application Development, and advanced programming concepts.',
    es: 'Formación en curso que abarca el ciclo completo de desarrollo de software. El plan de estudios incluye Ingeniería de Software, Bases de Datos, Desarrollo de Aplicaciones Web y conceptos de programación avanzada.'
  },
  edu2Title: { en: 'High School Physics Teacher', es: 'Profesorado de Educación Secundaria en Física' },
  edu2Institution: { en: 'ISDICA Concordia', es: 'ISDICA Concordia' },
  edu2Description: {
    en: "Beyond strong analytical thinking, this degree's training in pedagogy provided crucial soft skills. I gained practical experience in project planning and group management, enabling me to effectively guide collaborative development projects.",
    es: 'Además del pensamiento analítico, la formación en pedagogía me aportó habilidades blandas cruciales. Adquirí experiencia práctica en planificación y gestión de grupos, lo que me permite guiar eficazmente proyectos de desarrollo colaborativos.'
  },
  edu3Title: { en: 'Professional Courses & Certifications', es: 'Cursos y Certificaciones Profesionales' },
  edu3Institution: { en: 'Online Platforms & Self-Taught', es: 'Plataformas Online y Formación Autodidacta' },
  edu3Description: {
    en: 'Specialized training focused on strengthening my full-stack profile. The Full Stack course solidified my core web development foundation. With Odoo, I gained skills in ERP customization and Python. The deployment and Docker courses equipped me to manage the entire application lifecycle, from containerization to production deployment, ensuring scalability and efficiency.',
    es: 'Formación especializada enfocada en fortalecer mi perfil full-stack. El curso de Full Stack consolidó mis bases en desarrollo web. Con Odoo, adquirí habilidades en la personalización de ERP y desarrollo en Python. Los cursos de deploy y Docker me han capacitado para gestionar el ciclo de vida completo de las aplicaciones, desde la contenerización hasta el despliegue en producción, asegurando escalabilidad y eficiencia.'
  },

  // Nombres de materias y cursos
  courseWebDev: { en: 'Web Development Intro', es: 'Introducción al Desarrollo Web' },
  courseArch: { en: 'Computer Architecture', es: 'Arquitectura de Computadoras' },
  courseDB: { en: 'Databases', es: 'Bases de Datos' },
  courseProg3: { en: 'Programming III', es: 'Programación III' },
  courseElecMag: { en: 'Electrical & Magnetic Phenomena', es: 'Fenómenos Eléctricos y Magnéticos' },
  courseQuantum: { en: 'Quantum Physics & Relativity', es: 'Física Cuántica y Relatividad' },
  courseMath2: { en: 'Mathematics II', es: 'Matemática II' },
  courseAstrophysics: { en: 'Astrophysics', es: 'Astrofísica' },
  courseFullStackAP: { en: 'Full Stack Web Developer (Argentina Programa)', es: 'Desarrollador Web Full Stack (Argentina Programa)' },
  courseOdoo: { en: 'Odoo Consultant & Developer', es: 'Consultor y Desarrollador Odoo' },
  courseDeploy: { en: 'Server Deployment Professional', es: 'Profesional de Deploy en Servidores' },
  courseDocker: { en: 'Docker Professional', es: 'Profesional de Docker' },

  // --- EXPERIENCE ITEMS (ACTUALIZADOS) ---
  // Reemplaza las claves antiguas con estas nuevas, más descriptivas
  exp1Title: {
    en: 'Full-Stack Web Development "Tu Seguro Online"',
    es: 'Desarrollo Web Full-Stack "Tu Seguro Online"'
  },
  exp1Institution: {
    en: 'Freelance | Project for Sebastián Bustti',
    es: 'Freelance | Proyecto para Sebastián Bustti'
  },
  exp1Description: {
    en: 'Developed a comprehensive full-stack platform for an insurance broker to manage client leads. The system features a public-facing form for quote requests and a private admin dashboard for lead management.',
    es: 'Desarrollo de una plataforma full-stack completa para un productor asesor de seguros, destinada a la gestión de clientes potenciales. El sistema cuenta con un formulario público para solicitar cotizaciones y un dashboard de administración privado para gestionar los leads.'
  },

  exp2Title: {
    en: 'E-commerce Web Development "En un Toke"',
    es: 'Desarrollo Web E-commerce "En un Toke"'
  },
  exp2Institution: {
    en: 'Freelance | Project for Mauro Quinteros',
    es: 'Freelance | Proyecto para Mauro Quinteros'
  },
  exp2Description: {
    en: 'Built and configured a full e-commerce site using WordPress and WooCommerce. Integrated a payment gateway (Mercado Pago), shipping logistics (Correo Argentino), and implemented the Meta Pixel and Conversion API for advanced ad tracking.',
    es: 'Construcción y configuración de un e-commerce completo con WordPress y WooCommerce. Se integró una pasarela de pagos (Mercado Pago), logística de envíos (Correo Argentino) y se implementó el Píxel de Meta y la API de Conversiones para un seguimiento avanzado de publicidad.'
  },

  exp3Title: {
    en: 'Full-Stack Personal Project "Easy Survey"',
    es: 'Proyecto Personal Full-Stack "Easy Survey"'
  },
  exp3Institution: {
    en: 'University Collaborative Project',
    es: 'Proyecto Colaborativo Universitario'
  },
  exp3Description: {
    en: "In this collaborative project, I was responsible for UI/UX design and branding, frontend development with Angular consuming API endpoints, and the full application deployment on Render and Neon.",
    es: "En este proyecto colaborativo, fui responsable del diseño UI/UX y branding, el desarrollo frontend con Angular consumiendo endpoints de la API y el despliegue completo de la aplicación en Render y Neon."
  },

  exp4Title: {
    en: 'High School Physics Teacher',
    es: 'Profesor de Física de Nivel Secundario'
  },
  exp4Institution: {
    en: 'General Council of Education',
    es: 'Consejo General de Educación'
  },
  exp4Description: {
    en: 'My teaching role honed crucial soft skills applicable to development, such as effective communication for explaining complex concepts, project planning for curriculum design, and team management in the classroom.',
    es: 'Mi rol docente perfeccionó habilidades blandas cruciales para el desarrollo, como la comunicación efectiva para explicar conceptos complejos, la planificación de proyectos para el diseño curricular y la gestión de equipos en el aula.'
  },

  // Skills
  skillsTitle: { en: 'Skills', es: 'Habilidades' },
  hardSkills: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
  softSkills: { en: 'Soft Skills', es: 'Habilidades Blandas' },

  // Projects
  projectsTitle: { en: 'Projects', es: 'Proyectos' }, // <-- AÑADIDA
  viewProject: { en: 'View Project', es: 'Ver Proyecto' }, // <-- AÑADIDA
  viewRepo: { en: 'View Repository', es: 'Ver Repositorio' }, // <-- AÑADIDA
  project1Title: { en: 'Personal Web Portfolio', es: 'Portfolio Web Personal' },
  project1Desc: { en: 'My personal portfolio, developed with Angular for the front-end and a Java Spring Boot backend. A project to showcase my skills and achievements as a web developer. Deployed on cloud servers.', es: 'Mi portfolio personal, desarrollado con Angular en el front-end y un backend en Java con Spring Boot. Un proyecto para mostrar mis habilidades y logros como desarrollador. Desplegado en servidores en la nube.' },
  project2Title: { en: 'Hotel Website (React)', es: 'Sitio Web Hotelero (React)' },
  project2Desc: { en: 'Dynamic front-end development for a hotel company using React.js. Features responsive design and consumption of an external Node.js API to display dynamic information.', es: 'Desarrollo de un front-end dinámico para una empresa hotelera utilizando React.js. Cuenta con diseño responsivo y consume una API externa de Node.js para mostrar información dinámica.' },

  // --- AÑADE ESTAS NUEVAS CLAVES ---
  projectEasySurveyTitle: { en: 'Easy Survey', es: 'Easy Survey' },
  projectEasySurveyDesc: {
    en: 'Anonymous survey system that guarantees participant privacy. A Creator can manage their surveys via a secure link sent by email, without needing a login.',
    es: 'Sistema de Encuestas Anónimas que garantiza la privacidad del participante. Un Creador puede gestionar sus encuestas a través de un enlace seguro enviado por email, sin necesidad de login.'
  },
  projectTuSeguroTitle: { en: 'Tu Seguro Online', es: 'Tu Seguro Online' },
  projectTuSeguroDesc: {
    en: 'Full-Stack platform for managing vehicle insurance quotes, featuring a smart form for users and a secure admin dashboard for lead management.',
    es: 'Plataforma Full-Stack para la gestión de cotizaciones de seguros de vehículos, con un formulario inteligente para usuarios y un dashboard seguro para la gestión de leads.'
  },
  projectVerdeNidoTitle: { en: 'Verde Nido', es: 'Verde Nido' },
  projectVerdeNidoDesc: {
    en: 'Final academic project for a web platform to discover and book stays in nature-focused accommodations, featuring an advanced search filter and admin CRUD.',
    es: 'Trabajo final académico para una plataforma web que permite descubrir y reservar estancias en alojamientos rodeados de naturaleza, con filtro de búsqueda avanzado y CRUD de administración.'
  },
  // --- API DE RECLAMOS (ACTUALIZADO) ---
  projectApiReclamosTitle: { en: 'Dealership Claims API v2.0', es: 'API Gestión de Reclamos v2.0' },
  projectApiReclamosDesc: {
    en: 'Robust RESTful API for a dealership claims management system, migrated to PostgreSQL with Sequelize ORM and interactive Swagger documentation.',
    es: 'API RESTful robusta para un sistema de gestión de reclamos de concesionaria, migrada a PostgreSQL con el ORM Sequelize y documentación interactiva con Swagger.'
  },

  // --- EN UN TOKE (NUEVO) ---
  projectEnUnTokeTitle: { en: 'E-commerce "En un Toke"', es: 'E-commerce "En un Toke"' },
  projectEnUnTokeDesc: {
    en: 'Full e-commerce setup using WordPress and WooCommerce, including payment gateway integration and optimization of Meta ad conversion campaigns.',
    es: 'Configuración de e-commerce completo con WordPress y WooCommerce, incluyendo integración de pasarela de pagos y optimización de campañas de conversión en Meta Ads.'
  },

  // Contact
  contactTitle: { en: 'Contact', es: 'Contacto' },
  contactSubtitle: { en: 'Have a project in mind or just want to say hi? Feel free to reach out!', es: '¿Tienes un proyecto en mente o simplemente quieres saludar? ¡No dudes en contactarme!' },
  formName: { en: 'Your Name', es: 'Tu Nombre' },
  formEmail: { en: 'Your Email Address', es: 'Dirección de Correo' },
  formMessage: { en: 'Message', es: 'Mensaje' },
  formSend: { en: 'Send Message', es: 'Enviar Mensaje' },
  formSuccess: { en: 'Message sent successfully! I will get back to you soon.', es: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.' },
  formError: { en: 'Failed to send message. Please try again later.', es: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' },
  mapDescription: { en: 'My approximate location for reference.', es: 'Mi ubicación aproximada como referencia.' },

  // Footer
  footerText: {
    en: `© ${new Date().getFullYear()} Diego Lalanda. All rights reserved.`,
    es: `© ${new Date().getFullYear()} Diego Lalanda. Todos los derechos reservados.`
  },
};

export type I18nKey = keyof AppStrings;