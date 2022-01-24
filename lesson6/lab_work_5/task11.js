const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile(process.argv[3], 'utf8', (err, data) => {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end(data);
    });
    
    // Решение из учебника
    // res.writeHead(200, { 'content-type': 'text/plain' })
    // fs.createReadStream(process.argv[3]).pipe(res)

}).listen(process.argv[2]);
