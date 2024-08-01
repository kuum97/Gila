import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A00',
        primary_dark: '#D16400',
        black: '#1B1B1B',
        white: '#FAFAFA',
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
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
} satisfies Config;

export default config;
