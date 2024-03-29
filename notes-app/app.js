const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list
yargs.command({
	command: 'add',
	describe: 'Add a new note.',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		content: {
			describe: 'Content of a note',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.content);
	}
})

yargs.command({
	command: 'remove',
	describe: 'Remove a note.',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
})

yargs.command({
	command: 'list',
	describe: 'List all notes.',
	handler() {
		notes.listNotes();
	}
})

yargs.command({
	command: 'read',
	describe: 'Read a note.',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
})

//run command and log
yargs.parse();

