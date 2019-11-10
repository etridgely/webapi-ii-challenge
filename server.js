const express = require('express');

const postsRouter= require('./data/posts/post-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
res.send(`
    <h2>Message API</h>
    <p>Welcome to my API</P>
  `);
})

module.exports = server;