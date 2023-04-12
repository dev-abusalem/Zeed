/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colone: '#1E2247',
        coltwo: '#00F6FF',
        colthree: '#A5D3B6',
      },
    },
  },
  plugins: [],
 
}
