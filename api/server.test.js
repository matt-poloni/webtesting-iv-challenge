const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig');

describe('test environment', () => {
  it("sets DB_ENV to 'testing'", () => {
    expect(process.env.DB_ENV).toBe('testing');
  })
})

describe('server', () => {
  describe('/ GET', () => {
    it('should return 200 status', () => {
      return request(server)
        .get('/')
        .expect(200);
    })
  })
})

describe('/dogs route', () => {
  afterEach(async () => {
    await db('dogs').truncate();
  });

  describe('POST', () => {
    it('should return w/ status 201', () => {
      const dog = { name: 'Duffer' };
      return request(server)
        .post('/api/dogs')
        .send(dog)
        .expect(201);
    })

    it('should return the id of the new dog', async () => {
      const expected = { name: 'Duffer' };
      const [id] = await request(server)
        .post('/api/dogs')
        .send(expected);
      const actual = await request(server)
        .get('/api/dogs')
        .send({id});
      expect(actual.name).toBe(expected.name);
    })
  })
})
