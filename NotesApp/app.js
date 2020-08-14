const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./note.js');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note boody',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    note.addNote(argv.title, argv.body);
    // console.log('Title: ' + argv.title);
    // console.log('Body: ' + argv.body);
  }
})

// Remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log('Removing a note!');
  }
})

// List command
yargs.command({
  command: 'list',
  describe: 'list all note',
  handler: () => {
    console.log('Your notes listed!');
  }
})

// Read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log('Your specific note!');
  }
})

// console.log(yargs.argv);
yargs.parse()
