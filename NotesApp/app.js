const validator = require('validator');
const fs = require('fs');
const add = require('./utils.js');
const getNotes = require('./note.js');

fs.appendFileSync('notes.txt', "Data to be appended!!\n", 'utf-8');
console.log("Inside the app file!!");

const sum = add(4, 8);
console.log(sum);
console.log(getNotes());
if(validator.isEmail('sarangiprateek80@gmail.com')) {
  console.log('Varified Email');
} else {
  console.log('Not a varified email');
}

if(validator.isURL('https://wiki.hyperledger.org/display/fabric/Hyperledger+Fabric')) {
  console.log('Valid URL');
} else {
  console.log('Invalid URL');
}
