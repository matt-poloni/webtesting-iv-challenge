const request = require('supertest');
const router = require('./router.js');

describe('/dogs route', () => {
  it('should run tests', () => {
    expect(true).toBe(true);
  })

  describe.skip('POST', () => {
    it('should return w/ status 201', () => {
      return request(server)
        .get('/')
        .expect(201);
    })

    it('should return the id of the new dog', async () => {
      const expected = { name: 'Duffer' };
      const [id] = await request(router)
        .post(expected);
      const actual = await request(router)
        .get({id})
      expect(actual.name).toBe(expected.name);
    })
  })
})