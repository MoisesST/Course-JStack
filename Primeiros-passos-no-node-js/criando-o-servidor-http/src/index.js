const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end('<h1>Hello, world!</h1>');
    response.end('<h1>Ola, mundo!</h1>');
});

server.listen(3006, () => console.log('Server started at http://localhost:3006'));