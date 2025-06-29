// src/data/projectImages.ts

/**
 * Esta función genera un array de URLs de imágenes para un proyecto específico.
 * Utiliza import.meta.glob de Vite con la opción 'eager: true' para cargar
 * los módulos de imagen directamente y obtener su URL final.
 * 
 * @param folderName - El nombre de la carpeta del proyecto en `src/assets`.
 * @returns Un array de strings con las URLs de las imágenes listas para producción.
 */
const generateImagePaths = (folderName: string): string[] => {
  // CAMBIO 1: Añadimos `{ eager: true }` y especificamos que esperamos un módulo con un 'default' de tipo string.
  const imageModules = import.meta.glob<{ default: string }>(
    '/src/assets/**/*.{jpg,jpeg,png,webp,svg}', 
    { eager: true }
  );
  
  const imagePaths: string[] = [];
  
  const prefix = `/src/assets/${folderName}/`;
  
  for (const path in imageModules) {
    if (path.startsWith(prefix)) {
      // CAMBIO 2: En lugar de guardar la ruta (path), guardamos la URL real del módulo importado.
      // imageModules[path] es el módulo, y imageModules[path].default es la URL de la imagen.
      imagePaths.push(imageModules[path].default);
    }
  }
  
  // La lógica de ordenación puede ser un poco más compleja ahora que no tenemos la ruta original,
  // pero podemos extraer el nombre del archivo de la URL final.
  imagePaths.sort((a, b) => {
    // Extraemos el nombre del archivo, ej: "1.asdf123.png" -> "1"
    const numA = parseInt(a.match(/\/(\d+)[-.]/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/\/(\d+)[-.]/)?.[1] || '0', 10);
    return numA - numB;
  });

  return imagePaths;
};

// Exportamos el objeto con las rutas de las imágenes (sin cambios aquí)
export const projectImages = {
  easySurvey: generateImagePaths('easy-survey'),
  tuSeguroOnline: generateImagePaths('tu-seguro-online'),
  enUnToke: generateImagePaths('en-un-toke'),
  apiReclamos: generateImagePaths('api-reclamos'),
  verdeNido: generateImagePaths('verde-nido'),
};