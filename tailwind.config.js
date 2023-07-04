/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(34, 40, 34, 0.5), rgba(34, 40, 34, 0.5)),url('/src/assets/bg-cover.jpg')",
        "bg-main": "linear-gradient(to right, rgba(34, 40, 34, 0.5), rgba(34, 40, 34, 0.5)),url('/src/assets/bg-header.jpeg')",
        "bg-mempelai": "url('/src/assets/bg-mempelai.jpeg')",
      },
      backgroundColor: {
        primary: "#45CFDD",
      },
      colors: {
        primary: "#45CFDD",
        secondary: "#3AA6B9",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
