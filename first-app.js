console.log("Hello world")

const fs = require('fs')
fs.writeFileSync('hello.txt', 'Hello world')

/*
const arr = [1, 2, 3, 4]

for(i of arr) {
    console.log(i)
}
*/

const arr = ['Hii', 'Hello', 'Bye']

for(i of arr) {
    console.log(i)
}

console.log(arr.map(i => i + 'World!!'))
arr.push('How are you')
console.log(arr)