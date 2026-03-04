/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'hsl(215, 45%, 10%)',
          50: 'hsl(215, 45%, 96%)',
          100: 'hsl(215, 45%, 90%)',
          200: 'hsl(215, 45%, 75%)',
          300: 'hsl(215, 45%, 55%)',
          400: 'hsl(215, 45%, 35%)',
          500: 'hsl(215, 45%, 20%)',
          600: 'hsl(215, 45%, 15%)',
          700: 'hsl(215, 45%, 10%)',
          800: 'hsl(215, 45%, 7%)',
          900: 'hsl(215, 45%, 5%)',
        },
        gold: {
          DEFAULT: 'hsl(42, 65%, 55%)',
          50: 'hsl(42, 65%, 96%)',
          100: 'hsl(42, 65%, 90%)',
          200: 'hsl(42, 65%, 80%)',
          300: 'hsl(42, 65%, 70%)',
          400: 'hsl(42, 65%, 62%)',
          500: 'hsl(42, 65%, 55%)',
          600: 'hsl(42, 65%, 45%)',
          700: 'hsl(42, 65%, 35%)',
          800: 'hsl(42, 65%, 25%)',
          900: 'hsl(42, 65%, 15%)',
        },
        cream: {
          DEFAULT: 'hsl(40, 30%, 92%)',
          50: 'hsl(40, 30%, 98%)',
          100: 'hsl(40, 30%, 95%)',
          200: 'hsl(40, 30%, 92%)',
          300: 'hsl(40, 30%, 85%)',
          400: 'hsl(40, 30%, 75%)',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
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
        lineGrow: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
