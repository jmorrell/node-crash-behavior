#!/usr/bin/env node

const http = require('http');
const throng = require('throng');

const workers = process.env.WEB_CONCURRENCY || 4;

throng(workers, startWorker);

function startWorker() {
  const PORT = process.env.PORT || 5000;

  const server = http.createServer((req, res) => {
    if (req.url === '/error') {
      throw new Error('Oh no!');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, world!\n`);
  });

  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

