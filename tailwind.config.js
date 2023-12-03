/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./wallet.html",
    "./login.html",
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'url': "url('./images/bg1.avif')",
      })
    }
  },
  plugins: [],
}
