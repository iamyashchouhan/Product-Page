/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'system-ui', 'sans-serif'],
        product: ['Product Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};