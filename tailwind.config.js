/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_grey:'#454543',
        light:'#73736E',
        yellow:'#F0A03A',
      },
      screens: {
      qs: { max: "479px" },
      sm: { min: "480px" },
      md: { min: "768px" },
      lg: { min: "976px" },
      xl: { min: "1440px" },
    },
    },
  },
  plugins: [],
}

