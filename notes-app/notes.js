const fs = require('fs')
const chalk = require('chalk');
const yargs = require('yargs');
const { notStrictEqual } = require('assert');


const addNote = (title, body) => {
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added."));
    } else {
        console.log(chalk.red.inverse("Note title already taken."));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse("Note removed."));
    } else {
        console.log(chalk.red.inverse("Note not found."));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.green.inverse("Listing notes:"));
        notes.forEach((note) => console.log(note.title));
    } else {
        console.log(chalk.red.inverse("No notes to list."));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title = title);
    if(note) {
        console.log(chalk.green.inverse("Title:",note.title));
        console.log(chalk.green.inverse("Body:", note.body));
    }
}

// internal functions
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
