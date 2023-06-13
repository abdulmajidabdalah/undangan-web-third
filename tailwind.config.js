/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(6,5,6,0), rgba(0,0,0,0)),url('/src/assets/bg-cover2.jpg')",
        "bg-main": "url('/src/assets/bg-header.jpg')",
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
