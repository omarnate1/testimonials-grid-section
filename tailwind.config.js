/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        "moderate-violet": "#7541c8",
        "very-dark-grayish-blue": "#48556a",
        "very-dark-blackish-blue": "#19212e",
        "light-gray": "#cfcfcf",
        "light-grayish-blue": "#ecf2f8",
      },
      fontFamily: {
        "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
      },
      fontWeight: {
        500: 500,
        600: 600,
      },
    },
  },
  plugins: [],
};
