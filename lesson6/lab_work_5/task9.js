const http = require('http');
const bl = require('bl');
let urls = [process.argv[2], process.argv[3], process.argv[4]];
function getData(urls) {
    if (urls.length === 0) return;
    http.get(urls[0], (res) => {
        res.pipe(
            bl((err, data) => {
                if (err) return console.log('!!!!!!!!!!!!!');
                console.log(data.toString());
            })
        );
        getData(urls.slice(1, urls.length));
    });
}
getData(urls);
/*
//Решение из учебника
const results = []
let count = 0
function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}
for (let i = 0; i < 3; i++) {
  httpGet(i)
}
*/