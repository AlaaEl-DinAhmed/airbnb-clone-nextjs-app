/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'libs/ui-shared/src/lib/**/*.{js,ts,jsx,tsx}',
    'apps/airbnb-clone/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FF385C',
        },
        secondary: {
          500: '#000',
        },
      },
    },
  },
  plugins: [],
};
