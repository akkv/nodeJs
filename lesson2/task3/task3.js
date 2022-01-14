const fs = require('fs');
const data = 'data.txt';
fs.readFile(data, 'utf-8', (err, data) => {
    if (err) {
        console.log('err');
        return;
    }
    let arr = data.split(' ');
    let file1 = arr
        .filter((n) => {
            return n % 2 === 0;
        })
        .join(' ');

    let file2 = arr
        .map((n) => {
            return Math.pow(n, 3);
        })
        .join(' ');
        
    fs.writeFile('out-1.txt', file1, (err) => {
        if (err) console.log('err');
    });
    fs.writeFile('out-2.txt', file2, (err) => {
        if (err) console.log('err');
    });
});
