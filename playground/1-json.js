const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const book = JSON.parse(dataJSON);
const book = JSON.parse(dataBuffer.toString());

book.title = "Fantastic Beasts and Where to Find Them";
book.author = "J. K. Rowling";

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);