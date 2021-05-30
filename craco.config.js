const path = require('path');

// * WoW that's to much xD, found jest is sad with path alias tol ate
// TODO: Make the paths auto generated for both

module.exports = {
  jest: {
    configure: {
      "moduleNameMapper": {
        "@atoms(.*)$": "<rootDir>/src/components/atoms/$1",
        "@molecules(.*)$": "<rootDir>/src/components/molecules/$1",
        "@organisms(.*)$": "<rootDir>/src/components/organisms/$1",
        "@pages(.*)$": "<rootDir>/src/components/pages/$1",
        "@skeletons(.*)$": "<rootDir>/src/components/skeletons/$1",
        "@templates(.*)$": "<rootDir>/src/components/templates/$1",
        "@api(.*)$": "<rootDir>/src/api/$1",
        "@test-utils": "<rootDir>/src/utils/test-utils",
        "@utils": "<rootDir>/src/utils",
        "@hooks": "<rootDir>/src/hooks",
        "@actions": "<rootDir>/src/redux/actions",
      }
    },
  },
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@skeletons': path.resolve(__dirname, 'src/components/skeletons'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@test-utils': path.resolve(__dirname, 'src/utils/test-utils'),
      '@actions': path.resolve(__dirname, 'src/redux/actions'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@sass': path.resolve(__dirname, 'src/sass/_utils.scss')
    },
  },
};