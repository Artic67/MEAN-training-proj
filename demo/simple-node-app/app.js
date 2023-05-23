const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = './public/';
const port = process.env.port | 3000;

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        render(response, 'index.html');
    } else if (request.url === '/about') {
        render(response, 'about.html');
    } else if (request.url === '/contact') {
        render(response, 'contact.html');
    } else {
        response.writeHead(404, {'Content-type' : 'text-html'});
        response.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

const render = (response, file) => {
    fs.readFile(path.join(rootDir, file), (err, data) => {
        if (err) {
            response.writeHead(404, {'Content-type' : 'text-html'});
            response.end('<h1>404 Not Found</h1>');
        }
        response.writeHead(200, {'Content-type' : 'text-html'});
        return response.end(data);
    });
}