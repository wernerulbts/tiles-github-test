/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        card: '#151515',
        border: '#262626',
        accent: '#f97316'
      }
    }
  },
  plugins: []
}
