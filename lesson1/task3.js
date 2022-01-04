const http = require('http');
const fs = require('fs');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    function readFile(arr) {
        if (arr.length === 0) {
            return res.end();
        }
        fs.readFile(arr[0], 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end('Error of reading file!');
            }
            res.write(data);
            readFile(arr.slice(1, arr.length));
        });
    }
    readFile(page);
}).listen(8000);
