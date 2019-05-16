const db = require('../../data/dbConfig');
const Dogs = require('./model');

describe('dogs model', () => {
  afterEach(async () => {
    await db('dogs').truncate();
  });

  it('should run tests', () => {
    expect(true).toBe(true);
  })
})