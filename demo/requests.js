const { error } = require('console');
const http = require('http');
const data = JSON.stringify({
    title : 'MEAN App'
});

const options = {
    hostname : 'localhost',
    port : 3000,
    path : '/',
    method : 'POST',
    headers : {
        'Content-type' : 'application/json',
        'Content-Lenght' : data.length
    }
};

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    }); 
});

request.on('error', error => {
    console.error(error);
});

request.end();