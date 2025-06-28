/**
 * Esta función genera un array de URLs de imágenes para un proyecto específico.
 * Utiliza import.meta.glob de Vite para encontrar todas las imágenes que coincidan
 * con el patrón en la carpeta de assets.
 * 
 * @param folderName - El nombre de la carpeta del proyecto en `src/assets`.
 * @returns Un array de strings con las URLs de las imágenes.
 */
const generateImagePaths = (folderName: string): string[] => {
  // Patrón para encontrar imágenes (jpg, jpeg, png, webp)
  const imageModules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}');
  
  const imagePaths: string[] = [];
  
  // Construimos el prefijo de la ruta que buscamos
  const prefix = `/src/assets/${folderName}/`;
  
  // Recorremos todos los módulos de imágenes encontrados por Vite
  for (const path in imageModules) {
    if (path.startsWith(prefix)) {
      // Si la ruta comienza con el prefijo de nuestra carpeta, la añadimos.
      // En producción, Vite reemplazará esto con la URL correcta.
      imagePaths.push(path);
    }
  }
  
  // Opcional: Ordenar las imágenes por su nombre numérico (1.jpg, 2.jpg, ...)
  imagePaths.sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)\.\w+$/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/(\d+)\.\w+$/)?.[1] || '0', 10);
    return numA - numB;
  });

  return imagePaths;
};

// Exportamos un objeto con las rutas de las imágenes para cada proyecto
export const projectImages = {
  easySurvey: generateImagePaths('easy-survey'),
  tuSeguroOnline: generateImagePaths('tu-seguro-online'),
  enUnToke: generateImagePaths('en-un-toke'),
  apiReclamos: generateImagePaths('api-reclamos'),
  verdeNido: generateImagePaths('verde-nido'),
};