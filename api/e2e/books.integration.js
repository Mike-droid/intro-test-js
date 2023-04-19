const mockSpyGetAll = jest.fn(); //! importante que sea el primero en ser importado
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');
const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      //* Arrange
      const numberOfBooks = 4;
      const fakeBooks = generateManyBooks(numberOfBooks);
      mockSpyGetAll.mockResolvedValue(fakeBooks); //* usamos resolved porque es async await
      //* Act
      return request(app)
        .get('/api/v1/books') //! El '/' al inicio es obligatorio
        .expect(200)
        .then(({ body }) => {
          // console.log(body);
          //* Assert
          expect(body.length).toEqual(numberOfBooks);
        });
    });
  });
});
