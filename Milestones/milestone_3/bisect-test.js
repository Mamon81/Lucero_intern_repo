const calculator = (a, b, operation) => {
  if (operation === 'add') return a + b;
  if (operation === 'subtract') return a - b;
  if (operation === 'multiply') return a * b;
  if (operation === 'divide') return a * b; // BUG: Should be a / b
  return 0;
};
// eslint-disable-next-line no-console
console.log('Result:', calculator(4, 3, 'multiply'));
