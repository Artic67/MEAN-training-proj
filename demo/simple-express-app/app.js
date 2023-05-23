const express = require('express');
const fs = require('fs');
const path = require('path');

const rootDir = './public/';
const port = process.env.port | 3000;

const app = express();

app.get('/', (request, response) => {
    render(response, 'index.html');
});

app.get('/about', (request, response) => {
    render(response, 'about.html');
});

app.get('/contact', (request, response) => {
    render(response, 'contact.html');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

const render = (response, file) => {
    fs.readFile(path.join(rootDir, file), (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-type': 'text-html' });
            response.end('<h1>404 Not Found</h1>');
        }
        response.writeHead(200, { 'Content-type': 'text-html' });
        return response.end(data);
    });
}