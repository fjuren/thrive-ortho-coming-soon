/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D417F',
        'secondary-gray': '#555555',
        'teal-accent': '#4BCECD',
        'coral-light': '#FFF1EE',
        'coral-medium': '#FFC4B7',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}