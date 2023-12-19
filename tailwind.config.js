/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1200px',  // Large screens
        'xl': '1440px',  // Extra-large screens
        
      },
    },
  },
  plugins: [],
}
