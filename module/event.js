const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('bell', () => {
    console.log('School bell rings!');
});

schoolBell.emit('bell');