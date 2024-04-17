const defaultTheme = require('tailwindcss/defaultTheme')




/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.js",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
  
        colors: {
          'primary': {
            '50': '#f4f6fb',
            '100': '#e9ecf5',
            '200': '#ced8e9',
            '300': '#a3b7d6',
            '400': '#7190bf',
            '500': '#4b6c9e',
            '600': '#3d5a8c',
            '700': '#324872',
            '800': '#2d3f5f',
            '900': '#293651',
            '950': '#1b2336',
        },
          'secundary': {
            '50': '#f5f7fa',
            '100': '#ebeff3',
            '200': '#d2dbe5',
            '300': '#abbece',
            '400': '#7e9bb2',
            '500': '#5e7f99',
            '600': '#4a667f',
            '700': '#3a4f63',
            '800': '#354657',
            '900': '#303e4a',
            '950': '#202831',
        },
        
        }
      },
    },
    plugins: [],
  };
  
  
  