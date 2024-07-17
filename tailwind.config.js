/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0bd7c",
        text: "#F2F2F2 ",
      },
      backgroundImage: {
        'heroBg' : "url('./src/assets/hero.png')",
      },
    },
  },
  plugins: [],
}

