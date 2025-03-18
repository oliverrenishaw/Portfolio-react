/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        "2xs": "0.625rem",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-5px)" },
        },
        flyUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        "fly-up": "flyUp 0.5s ease-out forwards",
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
