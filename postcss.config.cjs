const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    postcssImport,
    postcssNested,
    tailwindcss,
    autoprefixer,
  ],
}
