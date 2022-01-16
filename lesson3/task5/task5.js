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
    } else if (req.url.startsWith('/camelToSnake')) {
        res.end(camelToSnake(req.url.slice(14)));
    } else if (req.url.startsWith('/snakeToCamel')) {
        res.end(snakeToCamel(req.url.slice(14)));
    }
}).listen(8000);

function camelToSnake(x) {
    let newStr = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[i].toUpperCase()) {
            newStr += '_';
            newStr += x[i].toLowerCase();
        } else {
            newStr += x[i];
        }
    }
    return newStr;
}
function snakeToCamel(x) {
    let newStr = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '_') {
            newStr += x[i + 1].toUpperCase();
            i++;
        } else {
            newStr += x[i];
        }
    }
    return newStr;
}
