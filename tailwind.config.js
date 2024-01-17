/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      'font-rubik': "'Rubik Burned', system-ui",
      'font-poppins': "'Poppins', sans-serif",
      'font-roboto-slab': "'Roboto Slab', serif",
      'font-dancing': "'Dancing Script', cursive",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}