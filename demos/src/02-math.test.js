const {
  sum,
  divide,
  multiply,
  substract,
  power,
} = require('./02-math');

test('sum of 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('substract 0 - 0 should be 0', () => {
  const rta = substract(0, 0);
  expect(rta).toBe(0);
});

test('mutiply 3 * 5 should be 15', () => {
  const rta = multiply(3, 5);
  expect(rta).toBe(15);
});

test('should divide', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);

  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should divide by 0', () => {
  const rta = divide(6, 0);
  expect(rta).toBe(null);

  const rta2 = divide(5, 0);
  expect(rta2).toBe(null);
});

test('should return the power of the base number', () => {
  const rta = power(2, 3);
  expect(rta).toBe(8);
});
