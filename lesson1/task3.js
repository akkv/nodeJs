const http = require('http');
const fs = require('fs');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    let x = '';
    function readFile(arr) {
        if (arr.length === 0) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(x);
        }
        fs.readFile(arr[0], 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end('Error of reading file!');
            }
            x += data;
            readFile(arr.slice(1, arr.length));
        });
    }
    readFile(page);
}).listen(8000);
