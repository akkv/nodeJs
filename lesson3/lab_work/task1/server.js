const http = require('http');
const fs = require('fs');

let file;
if (process.env.lang.slice(0, 2) == 'en') file = 'en.html';
else if (process.env.lang.slice(0, 2) == 'ru') file = 'ru.html';

http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
}).listen(8000);
