// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        minify: process.env.NODE_ENV === 'production',
        pure: process.env.NODE_ENV === 'production',
        fileName: process.env.NODE_ENV !== 'production',
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
  ignore: ['node_modules', 'build'],
};
