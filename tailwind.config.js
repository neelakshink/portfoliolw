/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4A90E2',
        accent: '#50E3C2',
        'bg-light': '#F7F9FC',
        'dark-bg': '#0B0F19',
        'text-primary': '#1C1C1E',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-particle': 'float-particle 4s ease-in-out infinite',
        '3d-rotate': '3d-rotate 12s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 1s ease-out',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'gradient-text': 'gradient-text 3s ease infinite',
        'button-glow': 'button-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'shimmer-slow': 'shimmer-slow 3s ease-in-out infinite',
        'shimmer-fast': 'shimmer-fast 1s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 15s linear infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-particle': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translateY(-10px) translateX(5px) rotate(90deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(-5px) rotate(180deg)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-10px) translateX(5px) rotate(270deg)',
            opacity: '1'
          },
        },
        '3d-rotate': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(15deg) rotateY(90deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(180deg)' },
          '75%': { transform: 'rotateX(-15deg) rotateY(270deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)'
          },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'slide-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'button-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)'
          },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shimmer-slow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shimmer-fast': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '33%': { transform: 'rotateX(15deg) rotateY(120deg) rotateZ(5deg)' },
          '66%': { transform: 'rotateX(-10deg) rotateY(240deg) rotateZ(-5deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(360deg) rotateZ(0deg)' },
        },
        'matrix-rain': {
          '0%': { 
            transform: 'translateY(-100vh)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh)',
            opacity: '0'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 30px rgba(147, 51, 234, 0.5)',
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.5)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.5)',
        'glow-red': '0 0 30px rgba(239, 68, 68, 0.5)',
      },
    },
  },
  plugins: [],
};