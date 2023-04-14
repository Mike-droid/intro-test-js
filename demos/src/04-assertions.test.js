// matchers

test('test object', () => {
  const data = { name: 'miguel' };
  data.lastname = 'reyes';
  expect(data).toEqual({ name: 'miguel', lastname: 'reyes' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(true).toBeTruthy();
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Miguel').toMatch(/el/); // regex
});

test('lists / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(4);
});
