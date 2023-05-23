/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "genereted":"0px -200px 35px rgba(25, 218, 22 , .3)"
      },
      height: {
        "80vh":"80vh",
        "70vh":"70vh",
        "60vh":"60vh",
        "50vh":"50vh",
        "40vh":"40vh",
        "30vh":"30vh",
        "20vh":"20vh",
      },
      rotate:{
        "360":"360deg"
      },
      colors: {
        "benim":"red"
      }
    },
  },
  plugins: [],
}