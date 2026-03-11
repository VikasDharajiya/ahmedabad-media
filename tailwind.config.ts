/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      color: {
        primary: '#b91c1c',
        'primary-hover': '#991b1b',
        'primary-active': '#7f1d1d',
        'secondary-hover': '#F9FAFB',
      },
    },
  },
  plugins: [],
};
