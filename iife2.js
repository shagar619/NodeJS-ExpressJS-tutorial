( (require, exports, module, __filename, __dirname) => {
    let a = 10;  // global scope
(
    (name) => {
        let a = 10;  // block scope
    console.log(`Learning ${name} is fun!`);
})('nodejs');

console.log(a);
console.log(module);
console.log(__filename);
console.log(__dirname);

} )(require, exports, module, __filename, __dirname)