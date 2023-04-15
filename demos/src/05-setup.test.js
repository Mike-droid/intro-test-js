describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    //* run DB service
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
    //* turn down DB service
  });

  test('case 1', () => {
    console.log('caso 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('caso 2');
    expect(1 + 3).toBe(4);
  });

  describe('Set 2', () => {
    beforeAll(() => {
      console.log('beforeAll interno');
    });

    beforeEach(() => {
      console.log('beforeEach interno');
    });

    afterEach(() => {
      console.log('afterEach interno');
    });

    afterAll(() => {
      console.log('afterAll interno');
      //* turn down DB service
    });

    console.log('caso 3');
    test('case 3', () => {
      expect(1 - 3).toBe(-2);
    });

    console.log('caso 4');
    test('case 3', () => {
      expect(0 - 0).toBe(0);
    });
  });
});
