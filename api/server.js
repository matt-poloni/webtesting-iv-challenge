const express = require('express');

// const dogsRt = require('./dogs/router');

const server = express();
server.use(express.json());

// server.use('/api/dogs/', dogsRt);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Running' });
});

module.exports = server;