const http = require('http');
const fs = require('fs');
const moment = require('moment');
const christmas = '2022-12-25'
console.log(christmas);
console.log(moment(christmas).format('LL'));
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data)
        }
    })
})

server.listen(PORT, () => {
    console.log(`APP Berjalans pada ${PORT}`);
})
