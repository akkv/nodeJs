const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.method == 'POST') {
        req.on('data', (data) => {
            res.write(data.toString().toUpperCase());
        });
        req.on('close', () => {
            res.end();
        });
    } else {
        console.log('not a POST')
    }
    /*
    // Решение из учебника
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
    */
}).listen(process.argv[2]);

// Обязательно ли тут использовать потоки?
// Существенная ли разница в решениях?
// и в предыдущем задании