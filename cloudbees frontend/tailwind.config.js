/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffc700",
      secondary: "#333333",
      darkgrey: "#18191A",
      white: "white",
      mediumyellow: "#ffdb5d",
      liteyellow: "#fff0b9",
      mediumgrey: "#6b7280",
      litegrey: "#94a3b8",
      ashgrey: "#F7F7F9",
      star: "#D93025",
      black: "#000000",
      liteblack: "rgba(1, 1, 1, 0.66)",
    },
    extend: {
      backgroundImage: {
        "my-footer":
          "linear-gradient(102deg, rgb(255,174,2) 25%, rgb(255,233,0) 100%)",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
