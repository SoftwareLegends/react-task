const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"inter"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      pallate1: "#54BAB9",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
