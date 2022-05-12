const express = require('express');
const Users = require('./user-model');

const server = express();

module.exports = server;

server.use(express.json());

/* server */

server.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
});

server.get('/api/users', (req, res) => {
  Users.getAll()
    .then(result => {
      res.json(result);
    });
});

server.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  req.end();
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  req.end();
});
