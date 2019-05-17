const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const db = require('./model');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Running' });
});

server.get('/api/dogs', (req, res) => {
  db.get()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(err => {
      res.status(500).json({ error: "Couldn't retrieve dogs from database" })
    })
})

server.get('/api/dogs/:id', (req, res) => {
  const {id} = req.params;
  db.get({id})
    .then(dog => {
      !dog
        ? res.status(404).json({ error: 'Specified dog not found.' })
        : res.status(200).json(dog);
    })
    .catch(err => {
      res.status(500).json({ error: "Couldn't retrieve dog from database" })
    })
})

server.post('/api/dogs', (req, res) => {
  db.post(req.body)
    .then(created => {
      res.status(201).json(created);
    })
    .catch(err => {
      res.status(500).json({ error: "Couldn't create new dog database" })
    })
})

server.delete('/api/dogs/:id', (req, res) => {
  db.del(req.params.id)
    .then(count => {
      !count
        ? res.status(404).json({ error: 'Specified dog not found.' })
        : res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ error: "Couldn't create new dog database" })
    })
})

module.exports = server;