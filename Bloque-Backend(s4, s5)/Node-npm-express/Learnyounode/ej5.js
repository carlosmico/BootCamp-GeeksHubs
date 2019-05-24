const fs = require('fs');
const path = require('path');

let dir = process.argv[2];

var ext = "." + process.argv[3];



fs.readdir(dir, (err, list) => {
    if (err) throw err;

    list.forEach(file => {

        //let fileExt = file.split(".")[1];

        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});