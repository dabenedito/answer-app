/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,ts}' ],
  daisyui: {
    theme: [ 'corporate' ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
