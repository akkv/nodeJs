const fs = require('fs');
const path = require('path');
const filterFiles = require('./task5.js');
function callback(err, list) {
    if (err) return console.log('ERROR!');
    list.forEach((elem) => {
        console.log(elem);
    });
}
filterFiles(process.argv[2], process.argv[3], callback);
