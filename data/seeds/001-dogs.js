exports.seed = function(knex, Promise) {
  return knex('dogs').truncate()
    .then(function () {
      return knex('dogs').insert([
        {
          id: 1,
          name: 'Duffer'
        },
        {
          id: 2,
          name: 'Hercules'
        },
        {
          id: 3,
          name: 'Roscoe'
        },
        {
          id: 4,
          name: 'Fred'
        },
      ]);
    });
  };
