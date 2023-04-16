//* AAA
//* Arrange / Given
//* Act / When
//* Assert / Then

const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  //* Arrange
  beforeEach(() => {
    person = new Person('Miguel', 0, 1.7);
  });

  test('Should return down', () => {
    //* Arrange
    person.weight = 45;

    //* Act
    const imc = person.calcIMC();

    //* Assert
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
