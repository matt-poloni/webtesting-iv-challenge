const db = require('../data/dbConfig');
const tbl = 'dogs';

module.exports = {
  get,
  post,
}

function get(val) {
  return val
    ? db(tbl).where(val).first()
    : db(tbl);
}

function post(entry) {
  return db(tbl).insert(entry);
}