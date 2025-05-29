/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'roboto-thin': ['Roboto-Thin', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'sans-serif']
      }
    }
  },
  plugins: []
};
