import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#173D30',
        moss: '#758B62',
        ivory: '#E9E5D8',
        river: '#8BAFA6',
        earth: '#A77D58',
        warm: '#F7F5EF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', ...fontFamily.serif],
        body: ['Manrope', ...fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        90: '22.5rem',
      },
      borderRadius: {
        organic: '1.6rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite reverse',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
};
