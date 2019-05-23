let alwaysThrows = () => {
    console.log("OH NOES");
}

let iterate = (arg) => {
    console.log(arg);
    return arg + 1;
}

let promise = (a) => {
    return new Promise((res, rej) => res(a));
}

promise(iterate(1))
    .then(res => iterate(res))
    .then(res => iterate(res))
    .then(res => iterate(res))
    .then(res => iterate(res))
    .then(alwaysThrows);