/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      }, 
    colors: {
      'brand-color': '#4c3398',
      'brand-new-color': '#423189',
      'primary-brand-color': '#5d3ebc',
      'brand-yellow': '#ffd300'
    }
  },
},
  plugins: [],
}

