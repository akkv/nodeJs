/*
const http = require('http');
const fsp = require('fs/promises');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    let allData = '';
    let promise = fsp.readFile(page[0], 'utf-8');
    promise
        .then((data) => {
            allData += data;
            return fsp.readFile(page[1], 'utf-8');
        })
        .then((data) => {
            allData += data;
            return fsp.readFile(page[2], 'utf-8');
        })
        .then((data) => {
            allData += data;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(allData);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.end('Ошибка!');
        });
}).listen(8000);
*/
/*
const http = require('http');
const fsp = require('fs/promises');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    let allData = '';
    page.reduce((prev, curr) => {
        return prev.then((data) => {
            if (data) allData += data;
            return fsp.readFile(curr, 'utf-8');
        });
    }, Promise.resolve())
        .then((data) => {
            allData += data;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(allData);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.end('Error!');
        });
}).listen(8000);
*/
/*
// async-await
const http = require('http');
const fsp = require('fs/promises');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    readFile(page)
        .then((data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.end('Error!');
        });
}).listen(8000);
async function readFile(arrFiles) {
    let allData = '';
    for (let i = 0; i < arrFiles.length; i++) {
        allData += await fsp.readFile(arrFiles[i], 'utf-8');
    }
    return allData;
}
*/

//Параллельное выполнение(массив промисов)
const http = require('http');
const fsp = require('fs/promises');
const page = ['header.html', 'index.html', 'footer.html'];
http.createServer((req, res) => {
    readFiles(page)
        .then((data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data.join(''));
        })
        .catch((err) => {
            res.statusCode = 500;
            res.end('Error!');
        });
}).listen(8000);

function readFiles(arrFiles) {
    let promisesArr = arrFiles.map((elem) => {
        return fsp.readFile(elem, 'utf-8');
    })
    return Promise.all(promisesArr);
}