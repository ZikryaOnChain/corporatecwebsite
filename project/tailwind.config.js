/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'cc-bg': 'rgb(var(--cc-bg-rgb) / <alpha-value>)',
        'cc-accent': 'rgb(var(--cc-accent-rgb) / <alpha-value>)',
        'cc-gold': 'rgb(var(--cc-gold-rgb) / <alpha-value>)',
        'cc-text': 'rgb(var(--cc-text-rgb) / <alpha-value>)',
        background: 'rgb(var(--cc-bg-rgb) / <alpha-value>)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'infinite-scroll': 'infiniteScroll 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};