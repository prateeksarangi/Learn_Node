const name = 'Prateek'
const age = 21

// Basic function syntex
function summarizeUser (userName, userAge) {
  return (
    'Name ' + userName +
        '\nAge ' + userAge
  )
}

console.log(summarizeUser(name, age))

// Arrow function
const sumUser = (userName, userAge) => {
  return (
    'Name ' + userName +
        '\nAge ' + userAge
  )
}

console.log(sumUser(name, age))

// Short-cut
const add = (a, b) => a + b
console.log(add(2, 5))

// Spread operator
const arr = [1, 2, 3]
// newArr = arr.slice()
const newArr = [...arr] // ... -> Spread operator
console.log(newArr)

// Rest operator
const fun = (...arg) => arg
console.log(fun(1, 2, 3))
