module.exports = {
  // For tsc, see https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  // '*.{ts,tsx}': () => 'npm run check-types',
  '*.{js,ts,tsx}': 'npm run check-lint',
  // same as tsc, lint-stages was ignoring the project prettier config
  '*.{js,ts,tsx,css,json}': () => 'npm run check-format',
};
