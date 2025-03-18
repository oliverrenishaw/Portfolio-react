/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // Existing size
        "2xs": "0.625rem", // Existing size
        "3xs": "0.5rem", // New custom size
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
        move: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        "fly-up": "flyUp 0.5s ease-out forwards",
        move: "move 0.5s ease-in-out",
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
    },
  },
  plugins: [],
};