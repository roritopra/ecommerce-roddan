const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'items-rgba': 'rgba(255, 255, 255, 0.40)',
        'items-rgba-2': 'rgba(25, 25, 27, 0.40)',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      coolvetica: ["Coolvetica", "sans-serif"],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      maxXs: {'max': '480px'},
      maxSm: {'max': '640px'},
      maxMd: {'max': '768px'},
      maxLg: {'max': '1024px'},
      maxXl: {'max': '1280px'}
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});


