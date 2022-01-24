const http = require('http');
const bl = require('bl');
let url = process.argv[2];
http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) return console.log('Error');
        let result = data.toString();
        console.log(result.length)
        console.log(result)
    }))
});