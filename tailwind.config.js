/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["28px", "36px"],
    },
    extend: {
      colors: {
        purple: "#5F259F",
        lightpurple: "#C7B3DD",
        red: "#DB2F20",
      },
    },
  },
  plugins: [],
};
