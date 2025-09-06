// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Courier Prime to your fonts
        'courier-prime': ['Courier Prime', 'monospace'],
      },
      colors: {
        // Colores del logo BlyWood (negro, gris, blanco)
        black: '#1a1a1a', 
        darkGray: '#333333',
        mediumGray: '#555555',
        lightGray: '#aaaaaa',
        white: '#ffffff',
        
        // Tonos de azul 
        navy: '#0d2238', 
        celeste: '#6cb6ff', 
      },
    },
  },
  plugins: [],
}