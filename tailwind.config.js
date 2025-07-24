/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        cyan: '#22d3ee',
        neon: '#00fff7',
        gray: {
          900: '#1a202c',
          800: '#23272f',
          700: '#2d3748',
          600: '#4a5568',
        },
        glass: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
