const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Tests for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); //* Buena práctica
  });

  describe('Tests for getBooks', () => {
    test('Should return a list of books', async () => {
      //* Arrange
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks); //* usamos resolved porque es async await
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return name of first book', async () => {
      //* Arrange
      const fakeBooks = generateManyBooks(4);
      mockSpyGetAll.mockResolvedValue([...fakeBooks]);
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
