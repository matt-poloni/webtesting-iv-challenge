const db = require('../data/dbConfig');
const Dogs = require('./model');

describe('dogs model', () => {
  afterEach(async () => {
    await db('dogs').truncate();
  });

  describe('post()', () => {
    it('should post provided dog to DB', async () => {
      const expected = { name: 'Duffer' }
      const [id] = await Dogs.post(expected);
      const actual = await Dogs.get({id});
      expect(actual.name).toBe(expected.name);
    })
  })

  describe('del()', () => {
    it('should delete the dog w/ provided ID from DB', async () => {
      const dog = { name: 'Duffer' }
      const num = await Dogs.post(dog);
      expect(num).toEqual([1]);
    })
  })
}) 