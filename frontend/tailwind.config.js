/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        primary: '#DDD1C7',
        secondary: '#C2CFB2',
        tertiary: '#8DB580',
        quaternary: '#7E887C',
        quinary: '#4B4A67',
      },
    },
  },
  plugins: [],
}
