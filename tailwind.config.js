/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Optional: Add pages directory if used
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        satoshi: ['Satoshi'],
        clash:['Clash Display']
      },
    },
  },
  plugins: [],
};


