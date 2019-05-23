let promise = new Promise((res, rej) => {

    setTimeout(() => {
        res("FULFILLED!");
    }, 300);

});

promise.then(console.log);