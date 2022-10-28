/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      'header': '0px 2px 12px rgba(0, 0, 0, 0.25)'
    },
    colors: {
      "background": "#F6FAFF",
      "black": "#000000",
      "white": "#FFFFFF",
      "blue": "#2F76E6",
      "input-background": "#EBECEF",
      "faded-text": "#45536C",
      "modal-background": "#F4F5F7"
    }
  },
  plugins: [],
}
