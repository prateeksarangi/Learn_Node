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

//Spread operator
arr = [1, 2, 3]
//newArr = arr.slice()
newArr = [...arr] //... -> Spread operator
console.log(newArr)

//Rest operator
const fun = (...arg) => arg
console.log(fun(1, 2, 3))