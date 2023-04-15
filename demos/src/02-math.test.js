const {
  sum,
  divide,
  multiply,
  substract,
  power,
} = require('./02-math');

describe('Tests for math', () => {
  describe('tests for sum', () => {
    test('sum of 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('tests for substract', () => {
    test('substract 0 - 0 should be 0', () => {
      const rta = substract(0, 0);
      expect(rta).toBe(0);
    });
  });

  describe('tests for multiply', () => {
    test('mutiply 3 * 5 should be 15', () => {
      const rta = multiply(3, 5);
      expect(rta).toBe(15);
    });
  });

  describe('tests for divide', () => {
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
  });

  describe('tests for potentiation', () => {
    test('should return the power of the base number', () => {
      const rta = power(2, 3);
      expect(rta).toBe(8);
    });
  });
});
