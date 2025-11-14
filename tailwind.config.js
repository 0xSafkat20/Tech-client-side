import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js" // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // This should work after installing flowbite
  ],
}
