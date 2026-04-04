/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          accent: '#d97706', // Amber/Wood
          tech: '#0891b2', // Cyan
          print: '#059669', // Emerald
          surface: '#f8fafc',
        },
      },
    },
  },
  plugins: [],
}
