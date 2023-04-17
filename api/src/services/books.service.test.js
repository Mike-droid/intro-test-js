const BooksService = require('./books.service');

describe('Tests for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Tests for getBooks', () => {
    test('Should return a list of books', async () => {
      //* Arrange
      //* Act
      const books = await service.getBooks({});
      console.log(books);
      //* Assert
      expect(books.lenght).toEqual(2);
    });
  });
});
