let promise = new Promise(
    (res, rej) => {
        res('PROMISE VALUE');
    }
);

promise.then(console.log);
console.log('MAIN PROGRAM');