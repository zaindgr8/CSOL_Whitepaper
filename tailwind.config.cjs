/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        ctaPrimary: 'hsl(356, 100%, 66%)',
        ctaHover: 'hsl(355, 100%, 74%)',
        headingColor: 'hsl(208, 49%, 24%)',
        footerTextColor: 'hsl(240, 2%, 79%)',
        bodyColor: 'hsl(207, 13%, 34%)',
        footerBgColor: 'hsl(240, 10%, 16%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
