let a = 10;  // global scope
(
    (name) => {
        let a = 10;  // block scope
    console.log(`Learning ${name} is fun!`);
})('nodejs');

console.log(a);