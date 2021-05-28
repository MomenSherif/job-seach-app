const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@skeletons': path.resolve(__dirname, 'src/components/skeletons'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@actions': path.resolve(__dirname, 'src/redux/actions'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
};