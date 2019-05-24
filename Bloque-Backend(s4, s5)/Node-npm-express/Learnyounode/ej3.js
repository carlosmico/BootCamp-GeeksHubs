let fs = require('fs');

let filePath = process.argv[2];

try {
    let texto = fs.readFileSync(filePath).toString();

    let stringsArr = texto.split("\n");

    console.log(stringsArr.length - 1);
} catch (error) {
    console.log(error)
}