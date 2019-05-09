let args = process.argv[2];

let [, , ...numbers] = process.argv;

let min = Math.min(...numbers);

console.log('The minimum of [' + numbers + '] is ' + min);