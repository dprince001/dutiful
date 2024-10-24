/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#532F82'
      },
      boxShadow: {
        lightCardShadow: '8px 11px 20px 0px #EAE5F040'
      }
    }
  },
  plugins: []
}
