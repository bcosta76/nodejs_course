//const validator = require ('validator')
const yargs = require('yargs' );
const { listNotes } = require('./notes.js');
const notes = require('./notes.js');

// yargs version
yargs.version('0.9.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Add a description',
        demandOption: true,
        type: 'string'
      }
  },
  handler (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
  },
  handler (argv) {
    notes.removeNote(argv.title);
  }
});

// create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler () {
    listNotes();
  }
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    notes.readNote(argv.title);
  }
});


yargs.parse()
//console.log(yargs.argv);

// if(cmd === 'add') {
//   console.log('Adding note.');
// } else if (cmd === 'remove') {
//   console.log('Removing note.');
// }

//const msg = getNotes()
//console.log(msg)
//console.log(chalk.red.bold.inverse('Success!' ));

//console.log(validator.isEmail('bruno@xpto'));

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)
