/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: '#e6f2f9',
        brightBlue: '#7bc9e8',
        veryPaleBlue: '#f8fafc',
        desaturatedBlue: '#93a6b0',
        darkBlue: '#354158',
      },
    },
  },
  plugins: [],
}

