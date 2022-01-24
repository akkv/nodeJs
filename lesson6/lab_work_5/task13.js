const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname == '/api/parsetime') {
        let x = new Date(reqUrl.query.iso);
        let resObj = {
            hour: x.getHours(),
            minute: x.getMinutes(),
            second: x.getSeconds(),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resObj));
    }
    if (reqUrl.pathname == '/api/unixtime') {
        let resObj = {
            [reqUrl.pathname.slice(5, reqUrl.pathname.length)]: Date.parse(reqUrl.query.iso),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resObj));
    }
}).listen(process.argv[2]);
