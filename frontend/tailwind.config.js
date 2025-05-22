import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['D-DIN', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'animekey-green': '#5E9326',
        'animekey-dark': '#000000',
        'animekey-light': '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;
