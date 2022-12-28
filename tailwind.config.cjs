const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    spacing: {
      ...Object.fromEntries([...Array(100)].map((_, i) => [i, `${i}px`])),
    },
    fontSize: {
      ...Object.fromEntries([...Array(100)].map((_, i) => [i, `${i}px`])),
    },
    maxWidth: {
      wrapper: '480px',
    },
    colors: {
      ...colors,
      base: '#fafafa',
      text: '#222222',
    },
    fontFamily: {
      'sans-serif': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
