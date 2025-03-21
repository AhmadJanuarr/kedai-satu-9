/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        delius : ['Delius Unicase', 'cursive'],
        deliusSwash : ['Delius Swash Caps', 'cursive'],
      }
    },
  },
  plugins: [],
}