/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'life-easier': "url('../public/images/hometopImg.png')",
        'guide-us': "url('../public/images/dis2.png')",
        'fill-us': "url('../public/images/hometopImg.png')",
        'community-us': "url('../public/images/community1.png')",
        'service-one-btm': "url('../public/images/serviceone.png')",
      },
      backgroundPosition: {
        'life-easier': '60% 0%',
     },
    },
  },
  plugins: [require('flowbite/plugin')
  ],
}

