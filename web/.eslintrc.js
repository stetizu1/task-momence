module.exports = {
  root: true,
  extends: ['../.eslintrc.js', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks' ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    es6: true,
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
  },
  ignorePatterns: ['src/assets/locales/', 'public/config.js'],
}
