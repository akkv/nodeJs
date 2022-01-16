const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url == '/ajax') {
        fs.readFile('ajax.html', 'utf-8', (err, data)=>{
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {'content-Type': 'text/html'})
            res.write(data);
            res.end();
        })
    }
}).listen(8000);
