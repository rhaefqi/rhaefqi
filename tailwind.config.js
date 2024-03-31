/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './*.{html,js}', './tailwind-components/*.{html, js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        'jakarta' : ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

