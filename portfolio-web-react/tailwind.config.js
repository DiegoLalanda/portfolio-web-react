/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Añade esto para que el modo oscuro funcione
  theme: {
    extend: {
      // Aquí movemos tus configuraciones
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'subtle-bob': 'subtleBob 3s ease-in-out infinite',
        // --- ¡Añadimos las animaciones del carrusel aquí también! ---
        'scroll': 'scroll 100s linear infinite',
        'scroll-reverse': 'scroll 100s linear infinite reverse',

        'swipe-indicator': 'swipeIndicator 2s ease-in-out infinite', 
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // --- ¡Y los keyframes del carrusel! ---
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        swipeIndicator: { // <-- AÑADE ESTE BLOQUE
          '0%, 100%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // También define tu fuente de display
      },
    },
  },
  plugins: [],
}