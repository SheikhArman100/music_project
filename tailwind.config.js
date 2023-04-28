/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      // breakpoints

      xs: { "max": "600px" },
      sm: { "max": "800px" },
      md: { "max": "1000px" },
      lg: { "max": "1250px" },
      
    },
    extend: {
       colors:{
        //custom colors for the website
        bgColor:'#0F0E19',
        textColor:"#FFFFFF",
        ascentColor:"#32E5EB"
        
        
      },
    },
  },
  plugins: [],
}
