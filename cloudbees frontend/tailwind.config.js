/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffc700",
      secondary: "#333333",
      white: "white",
      mediumyellow: "#ffdb5d",
      liteyellow: "#fff0b9",
      mediumgrey: "#6b7280",
      litegrey: "#94a3b8",
      star: "#D93025",
      black: "#000000",
    },
    extend: {},
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
