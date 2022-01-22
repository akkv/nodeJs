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
    } else if (req.url.startsWith('/getGoods')) { 
        let count = req.url.slice(10)
        fs.readFile('goods.json', 'utf-8', (err, data)=>{
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            let goodsArr = JSON.parse(data);
            let temp = JSON.stringify(goodsArr.splice(count - 4,  count))
            res.writeHead(200, {'content-Type': 'application/json'})
            res.write(temp);
            res.end();
        })
    }
}).listen(8000);