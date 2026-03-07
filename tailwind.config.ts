/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      color: {
        primary: '#b91c1c',
        'primary-hover': '#991b1b',
        'secondary-hover': '#F9FAFB',
      },
    },
  },
  plugins: [],
};
