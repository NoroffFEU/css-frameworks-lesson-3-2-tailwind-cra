// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
  },
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff00ff',
      },
    },
  },
  variants: {},
  plugins: [],
};
