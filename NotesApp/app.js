const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./note.js');

// const command = process.argv[2];
//
// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Removing note!');
// }

// console.log(process.argv);
console.log(yargs.argv);
