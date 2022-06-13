/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  
      colors:{
        'blue-facebook': '#1877f2',
        'gray-facebook': '#f0f2f5',
        'green-facebook': '#36A420'
      },

      Spacing:{
        '580': '580px',
        '380': '380px',
        
      },

     
    },
  },
  plugins: [],
}
