const fs = require('fs');
const add = require('./utils.js');
const getNotes = require('./note.js');

fs.appendFileSync('notes.txt', "Data to be appended!!\n", 'utf-8');
console.log("Inside the app file!!");

const sum = add(4, 8);
console.log(sum);
console.log(getNotes());
