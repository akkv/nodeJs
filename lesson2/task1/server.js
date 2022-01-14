const http = require('http');
const fs = require('fs');
const path = require('path');
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png'
};
http.createServer((req, res) => {
    let pathname, extname, mimeType;
    if (req.url === '/') {
        pathname = 'site/index.html';
    } else {
        pathname = 'site' + req.url;
        extname = path.extname(pathname);
        mimeType = mimeTypes[extname];
    }
    if (extname === '.jpg' || extname === '.gif' || extname === '.png') {
        try {
            let img = fs.readFileSync(pathname);
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(img);
        } catch (e) {
            res.statusCode = 404;
            res.end();
        }
    } else {
        fs.readFile(pathname, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Error');
            } else {
                res.writeHead(200, { 'content-Type': mimeTypes[path.extname(pathname)] });
                res.end(data);
            }
        });
    }
}).listen(8050);
