const request = require('supertest');
const server = require('./server.js');

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
