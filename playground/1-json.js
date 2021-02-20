const fs = require("fs");

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');  // creates a buffer
// const dataJSON = dataBuffer.toString();  // creates a json string
// const dataObj = JSON.parse(dataJSON);  // from json string to object

// console.log(dataObj.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const dataObj = JSON.parse(dataJSON);
dataObj.name = 'Bruno';
dataObj.age = '44';
fs.writeFileSync('1-json.json', JSON.stringify(dataObj));
