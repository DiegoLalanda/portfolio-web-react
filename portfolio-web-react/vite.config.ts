// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // <-- 1. Importa el plugin

export default defineConfig({
  plugins: [
    react(),
    // --- 2. AÑADE EL PLUGIN AQUÍ CON SU CONFIGURACIÓN ---
    VitePWA({
      registerType: 'autoUpdate', // Se actualiza automáticamente cuando hay una nueva versión
      injectRegister: 'auto',
      
      // Configuración del Manifest de la PWA
      manifest: {
        name: 'Diego Lalanda | Portfolio',
        short_name: 'DL Portfolio',
        description: 'Portfolio de Diego Lalanda, Desarrollador Web Full-Stack.',
        theme_color: '#1e293b', // Color del tema (tu azul oscuro)
        background_color: '#f8fafc', // Color de fondo (tu blanco/gris claro)
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png', // Tienes que crear este icono
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // Y este también
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/maskable-icon-512x512.png', // Icono "enmascarable" para Android
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      // Configuración del Service Worker
      workbox: {
        // Define qué archivos deben ser cacheados
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        
        // Estrategia de caché para las rutas de las imágenes de proyectos
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst', // Sirve desde la caché primero, si no, va a la red
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100, // Máximo 100 imágenes en caché
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
        ],
      },
    }),
  ],
})