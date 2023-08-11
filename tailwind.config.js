/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E6EF',
        secondary: '#0E103D',
        accent: '#69306D',
      }
    }
  },
  plugins: [],
}

