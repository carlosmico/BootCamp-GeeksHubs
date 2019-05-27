var promise = new Promise(function(fulfill, reject) {
    fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

promise.then(console.log);

var promise = Promise.resolve('SECRET VALUE');



// Likewise...

var promise = new Promise(function(fulfill, reject) {
    reject(new Error('SECRET VALUE'));
});

promise.catch(console.log);

var promise = Promise.reject(new Error('SECRET VALUE'));