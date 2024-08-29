import type { Config } from 'tailwindcss';

const config: Config = {
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        tall: { raw: '(min-width: 820px)' },
      },
      height: {
        'screen-minus-134': 'calc(100vh - 134px)',
        'screen-minus-63': 'calc(100vh - 63px)',
      },
      colors: {
        primary: '#FF7A00',
        primary_dark: '#D16400',
        black: '#1B1B1B',
        white: '#FAFAFA',
        white_light: '#ffffff',
        gray_100: '#EEEEEE',
        gray_200: '#DDDDDD',
        gray_300: '#CBC9CF',
        gray_400: '#ADAEB8',
        gray_500: '#A4A1AA',
        gray_600: '#79747E',
        gray_700: '#4B4B4B',
        red: '#FF0000',
        green: '#00C308',
        yellow: '#FFC23D',
      },
      animation: {
        spin: 'spin 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
};

export default config;
