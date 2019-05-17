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

    it('should return an id of 1', async () => {
      const dog = { name: 'Duffer' };
      const res = await request(server)
        .post('/api/dogs')
        .send(dog)
      const id = res.body[0];
      expect(id).toBe(1);
    })

    it('should return the id of the new dog', async () => {
      const dog = { name: 'Duffer' };
      const res = await request(server)
        .post('/api/dogs')
        .send(dog)
      const id = res.body[0];
      return request(server)
        .get(`/api/dogs/${id}`)
        .then(res => {
          expect(res.body.name).toBe(dog.name);
        })
    })
  })

  describe('DELETE', () => {
    it('should return w/ status 204', async () => {
      const dog = { name: 'Duffer' };
      const res = await request(server)
        .post('/api/dogs')
        .send(dog)
      const id = res.body[0];
      return request(server)
        .del(`/api/dogs/${id}`)
        .expect(204);
    })
  })
})
