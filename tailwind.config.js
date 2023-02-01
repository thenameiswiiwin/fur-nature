/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{tsx,jsx,js,ts}',
    './src/pages/**/*.{tsx,jsx,js,ts}',
    './src/components/**/*.{tsx,jsx,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FEF5EC',
        black: '#111',
      },
      fontFamily: {
        serif: ['var(--font-lora)'],
      },
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
    },
  },
  plugins: [],
};
