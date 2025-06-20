

// const fs = require('fs');

// console.log("Task 1");



// const text = "Learning File System";

// fs.writeFileSync('./hello.txt', text);

// console.log("Task 2");

// const data = fs.readFileSync('./hello.txt', { encoding: 'utf-8' });

// console.log("Task 3");

// console.log(data);







const fs = require('fs');




// fs.readFile('hello2.txt', { encoding: 'utf-8' }, (err, data) => {
//     if(err) {
//         console.log(`Something went wrong: ${err}`);
//         return
//     }

//     fs.writeFile('hello.txt', data, { encoding: 'utf-8' }, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//         return;
//     }
//     console.log(`File written successfully! ${data}`);
// });

// });












//  readStream

const readStream = fs.createReadStream('hello.txt', { encoding: 'utf-8' });

const writeStream = fs.createWriteStream('hello2.txt', { encoding: 'utf-8' });

readStream.on('data', (data) => {
    console.log(`Chunk: ${data}`);
    writeStream.write(data, (err) => {
        if (err) {
            throw new Error  ('Error writing to file:', err);
            return;
        }
    });
});


readStream.on("error", (err) => {
    throw new Error (`Error reading file: ${err}`);
});

writeStream.on("error", (err) => {
    throw new Error (`Error writing file: ${err}`);
});

readStream.on("end", () => {
    console.log("Read operation completed.");
    writeStream.end();
});


writeStream.on("finish", () => {
    console.log("Write operation completed.");
});







