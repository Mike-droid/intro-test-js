const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
  {
    _id: 2,
    name: 'Lord of the Rings',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Tests for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); //* Buena práctica
  });

  describe('Tests for getBooks', () => {
    test('Should return a list of books', async () => {
      //* Arrange
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books.length).toEqual(2);
    });

    test('Should return name of first book', async () => {
      //* Arrange
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
