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
      mockSpyGetAll.mockResolvedValue(fakeBooks); //* usamos resolved porque es async await
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books.length).toEqual(2);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return name of first book', async () => {
      //* Arrange
      mockSpyGetAll.mockResolvedValue([...fakeBooks, {
        _id: 3,
        name: 'Star Wars',
      }]);
      //* Act
      const books = await service.getBooks({});
      //* Assert
      expect(books[2].name).toEqual('Star Wars');
    });
  });
});
