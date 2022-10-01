/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"m_h_regular"', ...defaultTheme.fontFamily.sans],
        "m-h-regular": '"m_h_regular"',
        "m-h-medium": '"m_h_medium"',
        "m-h-bold": '"m_h_bold"',
        "m-m-semibold": '"m_m_semibold"',
        "m-m-bold": '"m_m_bold"',
        "m-m-medium": '"m_m_medium"',
        "m-h-semibold": '"m_h_semibold"',
        "m-m-regular": '"m_m_regular"',
      },
      colors: {
        "main-black": "#24282A",
        "main-stroke": "#DDDBE0",
        "main-text": "#24282A",
        "main-orange": {
          100: "#FDF3F0",
          900: "#F16025",
        },
      },
      boxShadow: {
        "custom-b": "inset 0px -1px 0px #DDDBE0",
      },
    },
  },
  plugins: [],
};
