const path = require("path");

const inputArgument = process.argv.slice(2);

const text = inputArgument.join(' ').concat('\n');

const timeStamp = new Date().toLocaleString();

const message = `${text} ${timeStamp} \n`;

if(!message) {
    console.log('Please enter a text');
    process.exit(1);
}

const filePath = path.join(__dirname, 'log.txt');

const fs = require('fs');

fs.appendFile(filePath, message, { encoding : 'utf8' }, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});
