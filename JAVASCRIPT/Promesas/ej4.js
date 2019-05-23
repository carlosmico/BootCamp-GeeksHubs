let promise = new Promise(
    (res, rej) => {
        res('I FIRED');
        rej(new Error('I DID NOT FIRE'));
    }
);

let onRejected = (error) => {
    console.log(error.message);
}

promise.then(console.log, onRejected);