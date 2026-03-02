const calculator = (a, b, operation) => {
  if (operation === 'add') return a + b;
  if (operation === 'subtract') return a - b;
  return 0;
};
// eslint-disable-next-line no-console
console.log('Result:', calculator(10, 5, 'subtract'));
