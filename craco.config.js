const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@actions': path.resolve(__dirname, 'src/redux/actions'),
    },
  },
};