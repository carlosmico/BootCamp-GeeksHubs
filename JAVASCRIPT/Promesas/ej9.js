let parsePromised = new Promise((res, rej) => {
    try {
        res(JSON.parse(process.argv[2]));
    } catch (error) {
        rej(error.message)
    }
});


parsePromised.then(console.log, console.log);