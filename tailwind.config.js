/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors:{ 
        light: {
          primary: '#ff8906',
          secondary: '#f8f9fa',
          accent: '#007bff',
          text: '#343a40',
          background: '#f8f9fa',
        },
        dark: {
          primary: '#ff8906',
          secondary: '#495057',
          accent: '#17a2b8',
          text: '#ffffff',
          background: '#0f0e17',
        },
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'lato':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
