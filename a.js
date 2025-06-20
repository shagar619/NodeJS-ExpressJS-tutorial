const { x, add, y } = require('./b');
const c = require('./c');

console.log(x); // 10
console.log(add(1, 2)); // 3
console.log(y); // 20


console.log(c.x); // 10
console.log(c.add(1, 2, 3)); // 3
console.log(c.y); // 20