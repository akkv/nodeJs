const http = require('http');
const server = http.createServer((req, res)=>{
    console.log('Hello!')
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h2>Hello!</h2>');
    res.end();
});
server.listen(8000);