// const { x, add, y } = require('./b');

import { x, add, y } from './b.mjs';

// const c = require('./c');

import { x as P, y as R } from './c.mjs';

import addition  from './c.mjs';

console.log(x); // 10
console.log(add(1, 2)); // 3
console.log(y); // 20


console.log(P); // 10
console.log(addition(1, 2, 3)); // 3
console.log(R); // 20