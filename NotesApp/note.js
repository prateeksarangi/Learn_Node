const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNotes = notes.find((note) => {
    return note.title === title
  })

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body
    });

    saveNote(notes);
    console.log(chalk.green.inverse('New note added!!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!!'));
  }

}

const removeNote = (title) => {
  const notes = loadNote();
  const idx = notes.indexOf({title});

  const notesToKeep = notes.filter((note) => {
    return note.title !== title
  })

  if ( notesToKeep.length === notes.length ) {
    console.log(chalk.red.inverse('No notes found!!'));
  } else {
    saveNote(notesToKeep);
    console.log((chalk.green.inverse('Note remove!!')));
  }
}

const listNote = () => {
  const notes = loadNote();
  for ( let i in notes ) {
    console.log(notes[i].title);
  }
}

const readNote = (title) => {
  // console.log('Reading note!!');
  // console.log(title);
  const notes = loadNote();
  const idx = notes.indexOf({title});

  const noteToRead = notes.find((note) => {
    return note.title === title;
  })

  if (noteToRead) {
    console.log('Title:- ' + noteToRead.title);
    console.log('Body:- ' + noteToRead.body);
  } else {
    console.log((chalk.red.inverse('Note not found!!')));
  }
}


const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNote = () => {
  try {
    const data = JSON.parse(fs.readFileSync('notes.json').toString());
    return data;
  } catch (err) {
    return [];
  }
}

module.exports = {
  removeNote: removeNote,
  addNote: addNote,
  listNote: listNote,
  readNote: readNote
};
