const fs = require('fs');

const getNotes = () => {
  return "Your Notes...";
}

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNote(notes);
    console.log('New note added!!');
  } else {
    console.log('Note title taken!!');
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
  getNotes: getNotes,
  addNote: addNote
};
