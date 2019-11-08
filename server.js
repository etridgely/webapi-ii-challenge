const express = require('express');

const hubsRouter= require('./data/db');

const server = express();
server.use(express.json());

server.use('/api/comments', hubsRouter);
server.use('/api/messages', hubsRouter);

server.get('/', (req, res) => {
res.send(`
    <h2>Message API</h>
    <p>Welcome to my API</P>
  `);
})

module.exports = server;