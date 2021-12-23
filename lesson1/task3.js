const http = require('http');
const fs = require('fs');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    page.forEach((elem) => {
        fs.readFile(elem, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                console.log(404);
                res.end(`File ${elem} not found!`);
            } else {
                res.write(data);
            }
        });
    });
    setTimeout(() => res.end(), 500);
    console.log('Request accepted!');
}).listen(8000, () => {
    console.log('HTTP server works in 8080 port!\n');
});
//не уверен в правильности решения