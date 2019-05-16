const db = require('../../data/dbConfig');
const tbl = 'dogs';

module.exports = {
  get,
  post,
}

function get(id) {
  return id
    ? db(tbl).where({id}).first()
    : db(tbl);
}

function post(entry) {
  return db(tbl).insert(entry);
}