/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
          xs: '500px',
          tab: '845px'
        }
    },
  },
  plugins: [require("daisyui")],
}

