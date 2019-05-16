const db = require('../../data/dbConfig');
const tbl = 'dogs';

module.exports = {
  get,
}

function get({id}) {
  return val
    ? db(tbl).where(id).first()
    : db(tbl);
}