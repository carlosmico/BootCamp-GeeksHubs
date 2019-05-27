let userArray = process.argv.slice(2);

let [, name, mail] = userArray;

let newUser = {
    username: name,
    email: mail
}

console.log(newUser);