const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterEach(async () => {
    await database.dropDatabase();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      //* Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 2000,
          author: 'Author 1',
        },
        {
          name: 'Book2',
          year: 2002,
          author: 'Author 2',
        },
      ]);
      //* Act
      return request(app)
        .get('/api/v1/books') //! El '/' al inicio es obligatorio
        .expect(200)
        .then(({ body }) => {
          //* Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
