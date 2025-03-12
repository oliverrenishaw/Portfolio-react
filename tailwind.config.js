/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontSize: {
        'xs': '0.75rem',
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
}