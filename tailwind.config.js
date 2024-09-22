/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {

      },
      colors: {
        "primary": "#FF6C2E",
        "dark": "#070707",
        "secondary": "#31333B"
      }
    },
  },
  plugins: [],
}