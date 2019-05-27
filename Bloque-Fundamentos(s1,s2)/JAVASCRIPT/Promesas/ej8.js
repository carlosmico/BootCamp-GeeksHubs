let promise = new Promise(
    (res, rej) => {
        res("MANHATTAN");
    }
);

const attachTitle = (arg) => {
    return 'DR. ' + arg;
}

promise.then(attachTitle).then(console.log);