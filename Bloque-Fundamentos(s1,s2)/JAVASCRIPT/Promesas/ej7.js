let first = new Promise((res) => { res('First promise resolved!') });

let second = (text) => {
    return new Promise(
        (res) => {
            res(text + " Second promise resolved!");
        }
    );
}

first.then(res => second(res)).then(console.log);