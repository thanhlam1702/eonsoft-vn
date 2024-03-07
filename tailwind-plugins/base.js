const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase, theme }) => {
  addBase({
    ':root': {
      '--site-padding': '16px',
      '--content-width': '1200px',
    },
  });
});
