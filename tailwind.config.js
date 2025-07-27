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
        orbitron: ['Orbitron', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'holographic': 'holographic 4s ease infinite',
        'glitch': 'glitch 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)',
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'holographic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
