const validator = require('validator');
const fs = require('fs');
const chalk = require('chalk');
const add = require('./utils.js');
const getNotes = require('./note.js');

fs.appendFileSync('notes.txt', "Data to be appended!!\n", 'utf-8');
console.log("Inside the app file!!");

const sum = add(4, 8);
console.log(sum);
console.log(getNotes());
if(validator.isEmail('sarangiprateek80@gmail')) {
  console.log(chalk.green('Valid Email'));
} else {
  console.log(chalk.blue.bgRed.bold('Invalid Email'));
}

if(validator.isURL('https://wiki.hyperledger.org/display/fabric/Hyperledger+Fabric')) {
  console.log(chalk.green.bgYellow.bold('Valid URL'));
} else {
  console.log(chalk.red('Invalid URL'));
}

console.log('String input given:- ', process.argv[2]);
