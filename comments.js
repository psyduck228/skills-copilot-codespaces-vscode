// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// This file is a part of the comments.js file

// Create a web server that listens on port 3000 and serves the comments.html file.
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3000);