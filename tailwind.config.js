/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
        '2xs': '0.625rem',
      },
      bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-5px)' },
        },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
}