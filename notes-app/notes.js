const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, content) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			content: content
		});

		saveNotes(notes);
		console.log(chalk.green("New note added :)"));
	}
	else {
		console.log(chalk.red("Note title taken :("));
	}
}

const removeNote = (title) => {
	const notes = loadNotes();
	const keepNotes = notes.filter((note) => note.title !== title);

	if (keepNotes.length !== notes.length) {
		saveNotes(keepNotes);
		console.log(chalk.green("Note removed!"));
	}
	else {
		console.log(chalk.red("No note to remove :("));
	}
}

const listNotes = () => {
	const notes = loadNotes();

	console.log(chalk.yellow.inverse(" Your notes "));
	notes.forEach((note) => console.log(chalk.cyan.italic(note.title)));
}

const readNote = (title) => {
	const notes = loadNotes();
	const targetNote = notes.find((note) => note.title === title);

	if (targetNote) {
		console.log(chalk.yellow(targetNote.title) + ": " + targetNote.content);
	}
	else {
		console.log(chalk.red("No note found :("));
	}
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const notes = JSON.parse(dataBuffer.toString());
		return notes;
	}
	catch (error) {
		return [];
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};