/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
};
