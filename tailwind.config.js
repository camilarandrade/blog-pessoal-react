/** @type {import('tailwindcss').Config} */module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#424242',
        'custom-purple': '#D58DF6',
        'custom-pink': '#D37D7F',
        'custom-lightgreen': '#6FC992',
        'custom-darkgreen': '#32C069',
        'custom-red': '#C04332',
      },
      borderRadius: {
        '33px': '33px',
        '50px': '50px',
      },
      fontFamily: {
        abril: ['Abril Fatface', 'cursive'],
        jura: ['Jura', 'sans-serif'],
        actor: ['Actor', 'sans-serif']

      },
      
    },
  },
  plugins: [],
}
