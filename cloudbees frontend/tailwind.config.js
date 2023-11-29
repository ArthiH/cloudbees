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
      ashgrey: "#F7F7F9",
      star: "#D93025",
      black: "#000000",
      liteblack: "rgba(1, 1, 1, 0.66)",
    },
    extend: {
      backgroundImage: (theme) => ({
        "custom-background":
          "url('D:/ARTHI/cloudbees/cloudbees frontend/src/assest/footer/footer_bg.jpg')",
        portfolio:
          "url('D:/ARTHI/cloudbees/cloudbees frontend/src/assest/portfolio/portfolio_1.jpg')",
        payment:
          "url('D:/ARTHI/cloudbees/cloudbees frontend/src/assest/portfolio/payment_3.jpg')",
        estate:
          "url('D:/ARTHI/cloudbees/cloudbees frontend/src/assest/portfolio/estate.jpg')",
      }),
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
