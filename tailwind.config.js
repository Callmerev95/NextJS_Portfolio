/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8f7f4",
        secondary: "#ffabe7",
        tertiary: "#191d2b",
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30af5b",
          90: "#292c27",
        },
        gray: {
          10: "#eeeeee",
          20: "#a2a2a2",
          30: "#7b7b7b",
          50: "#5b5b5b",
          90: "#141414",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
