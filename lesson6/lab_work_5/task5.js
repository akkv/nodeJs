const fs = require('fs');
const path = require('path');
function filterFiles(dir, extname, callback) {
    fs.readdir(dir, 'utf8', (err, list) => {
        if (err) return callback(err);
        list = list.filter(file => {
            if (path.extname(file) === '.' + extname) return true;
        });
        return callback(null, list);
    });
}
module.exports = filterFiles;
