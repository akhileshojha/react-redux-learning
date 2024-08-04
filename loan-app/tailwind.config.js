/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1a1a2e', // Add your custom dark color here
      },
    },
  },
  plugins: [],
}

