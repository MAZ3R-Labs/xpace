/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/*/.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'moving': 'move 10s linear infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin'),require("daisyui"),require('tailwindcss-gradient'),],
}
