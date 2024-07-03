/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Milestone Brush', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        violet: '#8A2BE2',
        electricBlue: '#00e0ff',
        black: '#000000',
      },
    },
  },
  plugins: [],
}