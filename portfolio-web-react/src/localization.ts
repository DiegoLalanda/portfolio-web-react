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
  valueEmail: string; // email is usually not translated
  valuePhone: string; // phone is usually not translated
  interestCoding: LocalizedString;
  interestMusic: LocalizedString;
  interestTravel: LocalizedString;
  interestReading: LocalizedString;

  // Resume
  resumeTitle: LocalizedString;
  educationTitle: LocalizedString;
  experienceTitle: LocalizedString;
  
  // Example Education Items
  edu1Title: LocalizedString;
  edu1Institution: LocalizedString;
  edu1Description: LocalizedString;
  edu2Title: LocalizedString;
  edu2Institution: LocalizedString;
  edu2Description: LocalizedString;

  // Example Experience Items
  exp1Title: LocalizedString;
  exp1Institution: LocalizedString;
  exp1Description: LocalizedString;
  exp2Title: LocalizedString;
  exp2Institution: LocalizedString;
  exp2Description: LocalizedString;

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
  navResume: { en: 'Resume', es: 'Curriculum' },
  navSkills: { en: 'Skills', es: 'Skills' },
  navProjects: { en: 'Projects', es: 'Proyectos' },
  navContact: { en: 'Contact', es: 'Contacto' },
  logoText: { en: 'Diego Lalanda', es: 'Diego Lalanda' },

  // Hero
  heroGreeting: { en: 'Hello, I am', es: '¡Hola, soy' },
  heroName: { en: 'Diego Lalanda', es: 'Diego Lalanda' },
  heroTitle: { en: 'Junior Full-Stack Web Developer', es: 'Programador Web Full-Stack Junior' },
  heroDescription: { 
    en: 'I combine my experience in education with my skills in web development. I work with students of different levels and ages, which has given me a unique perspective on their needs.', 
    es: 'Combino mi experiencia en educación con mis habilidades en desarrollo web. Trabajo con estudiantes de diferentes niveles y edades, lo que me ha dado una perspectiva única sobre sus necesidades.' 
  },
  heroSocials: { en: 'Find me on', es: 'Encuéntrame en' },

  // About
  aboutTitle: { en: 'About Me', es: 'A Cerca De' },
  aboutDescription1: { 
    en: 'Hello! My name is Diego Lalanda. I am a High School Physics Teacher and a Full Stack Developer in training. I am passionate about combining my experience in education with my web development skills.', 
    es: '¡Hola! Mi nombre es Diego Lalanda. Soy Profesor de Educación Secundaria en Física y Desarrollador Full Stack en formación. Me apasiona combinar mi experiencia en educación con mis habilidades en desarrollo web.' 
  },
  aboutDescription2: { 
    en: 'Currently, I am studying for a University Technician degree in Web Development, and my portfolio showcases my skills in Java, Typescript, HTML, and CSS. My goal is to create intuitive, efficient, and attractive web applications. I am constantly learning and looking for new technologies to improve. Thank you for visiting my portfolio, I hope to work with you soon!', 
    es: 'Actualmente, me estoy formando como Técnico Universitario en Desarrollo Web, y mi portfolio muestra mis habilidades en Java, Typescript, HTML y CSS. Mi objetivo es crear aplicaciones web intuitivas, eficientes y atractivas. Estoy constantemente aprendiendo y buscando nuevas tecnologías para mejorar. Gracias por visitar mi portfolio, ¡espero trabajar contigo pronto!'
  },
  personalDataTitle: { en: 'Personal Details', es: 'Datos Personales' },
  interestsTitle: { en: 'Interests', es: 'Intereses' },
  downloadCV: { en: 'Download CV', es: 'Descargar CV' },
  dataAge: { en: 'Birthday', es: 'Cumpleaños' },
  dataLocation: { en: 'Address', es: 'Dirección' },
  dataEmail: { en: 'Email', es: 'Email' },
  dataPhone: { en: 'Phone', es: 'Teléfono' },
  valueAge: { en: '11/29/1997', es: '29/11/1997' },
  valueLocation: { en: 'San Luis 17, Concordia, E.R, Argentina.', es: 'San Luis 17, Concordia, E.R, Argentina.' },
  valueEmail: 'guaio_2014@hotmail.com',
  valuePhone: '+54 345 6023111',
  interestCoding: { en: 'Games', es: 'Juegos' },
  interestMusic: { en: 'Music', es: 'Música' },
  interestTravel: { en: 'Football', es: 'Fútbol' },
  interestReading: { en: 'Science', es: 'Ciencia' },

  // Resume
  resumeTitle: { en: 'Resume', es: 'Curriculum' },
  educationTitle: { en: 'Education', es: 'Educación' },
  experienceTitle: { en: 'Experience', es: 'Experiencia' },
  
  // Education Items
  edu1Title: { en: 'Bachelor in Natural Sciences', es: 'Bachiller en Ciencias Naturales' },
  edu1Institution: { en: 'Escuela N°16 "Prof. Gerardo Victorín"', es: 'Escuela N°16 "Prof. Gerardo Victorín"' },
  edu1Description: { en: 'The high school bachelor\'s degree in natural sciences certifies and recognizes the completion of a study program in which I have developed fundamental skills and knowledge in the field of natural sciences.', es: 'El título de bachiller en ciencias naturales de la escuela secundaria, certifica y reconoce la finalización de un programa de estudios en el cual he desarrollado habilidades y conocimientos fundamentales en el ámbito de las ciencias naturales.' },
  edu2Title: { en: 'High School Physics Teacher', es: 'Profesorado de Educación Secundaria en Física' },
  edu2Institution: { en: 'ISDICA Concordia', es: 'ISDICA Concordia' },
  edu2Description: { en: 'This degree represents a solid training in Physics and Pedagogy that allows me to contribute to the education of future generations and the development of science and technology in the community. I was awarded the best average grade of 9.35.', es: 'Este título representa una formación sólida en Física y Pedagogía que me permite contribuir a la educación de las futuras generaciones y al desarrollo de la ciencia y la tecnología en la comunidad. Fui galardonado con el mejor promedio 9,35.' },
  
  // Experience Items
  exp1Title: { en: 'Administrative / Customer Service', es: 'Administrativo/ Atención al Público' },
  exp1Institution: { en: 'Asociación Atlética “Los Galgos”', es: 'Asociación Atlética “Los Galgos”' },
  exp1Description: { en: 'As an administrator, I have been responsible for recording and controlling the company\'s sales, and coordinating groups to meet objectives and solve problems. In customer service, I have worked in direct sales and ensured customer satisfaction.', es: 'Como administrativo, he sido responsable de registrar y controlar las ventas de la empresa, y coordinar grupos para cumplir objetivos y resolver problemas. En atención al público, he trabajado en ventas directas y asegurado la satisfacción del cliente.' },
  exp2Title: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
  exp2Institution: { en: 'Freelancer', es: 'Freelancer' },
  exp2Description: { en: 'As a full-stack web developer, I have acquired skills in multiple programming languages and technologies to create complete and functional web applications. One of my most important projects has been the development of my own personal web portfolio.', es: 'Como desarrollador web fullstack, he adquirido habilidades en múltiples lenguajes de programación y tecnologías para crear aplicaciones web completas y funcionales. Uno de mis proyectos más importantes ha sido el desarrollo de mi propio portfolio web personal.' },

  // Skills
  skillsTitle: { en: 'Skills', es: 'Skills' },
  hardSkills: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
  softSkills: { en: 'Soft Skills', es: 'Habilidades Blandas' },

  // Projects
  projectsTitle: { en: 'Projects', es: 'Proyectos' },
  viewProject: { en: 'View Project', es: 'Ver Proyecto' },
  viewRepo: { en: 'View Repository', es: 'Ver Repositorio' },
  project1Title: { en: 'Web Portfolio', es: 'Portfolio Web' },
  project1Desc: { en: 'One of my most significant projects has been the development of my own personal web portfolio. I used various web technologies to create an attractive and functional website that showcases my skills and achievements as a web developer.', es: 'Uno de mis proyectos más significativos ha sido el desarrollo de mi propio portfolio web personal. Utilicé diversas tecnologías web para crear un sitio web atractivo y funcional que muestra mis habilidades y logros como desarrollador web.' },
  project2Title: { en: 'Task Management App', es: 'App de Gestión de Tareas' },
  project2Desc: { en: 'A collaborative task management tool to help teams organize and track their work effectively.', es: 'Una herramienta colaborativa de gestión de tareas para ayudar a los equipos a organizar y seguir su trabajo de forma eficaz.' },
  
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