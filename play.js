const name = "Prateek"
let age = 21

//Basic function syntex
function summarizeUser(userName, userAge) {
    return (
        'Name ' + userName +
        '\nAge ' + userAge
    );
}

console.log(summarizeUser(name, age))

//Arrow function
let sumUser = (userName, userAge) => {
    return (
        'Name ' + userName +
        '\nAge ' + userAge
    );
}

console.log(sumUser(name, age))

//Short-cut
let add = (a, b) => a+b
console.log(add(2, 5))