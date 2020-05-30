module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'postcss-clamp': {
      precalculate: true,
    },
    cssnano: {},
  },
};
