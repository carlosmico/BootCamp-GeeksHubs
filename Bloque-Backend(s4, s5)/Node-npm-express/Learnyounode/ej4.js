const fs = require('fs');

let filePath = process.argv[2];

let nLines;

let read = () => {
    try {
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            let arr = data.toString();

            nLines = (arr.split("\n").length - 1);

            console.log(nLines);
        });
    } catch (error) {
        console.log(error);
    }
}

read();