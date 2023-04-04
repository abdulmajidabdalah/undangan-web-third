/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(6,5,6,0), rgba(6,5,6,0)),url('https://digimo.id/wp-content/uploads/2022/05/pexels-photo-372225.jpeg')",
        "bg-main": "url('/src/assets/bg-main.jpeg')",
        "bg-mempelai": "url('/src/assets/bg-mempelai.jpeg')",
      },
      backgroundColor: {
        primary: "#9e795e",
      },
      colors: {
        primary: "#9e795e",
        secondary: "#E7AB79",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
