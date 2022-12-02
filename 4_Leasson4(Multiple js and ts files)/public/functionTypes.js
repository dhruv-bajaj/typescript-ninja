"use strict";
let greet = () => {
    console.log("Hello World");
};
greet();
greet = () => {
    console.log("This is allowed as it is a function only");
};
greet();
// ? for optional paramer
// = for default
// default and optional not used together
const add = (a, b = 5, c) => {
    console.log(a + b);
    console.log(c);
    return a + b;
};
add(5);
add(5, 10, "hello");
// required parameters followed by default 
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 2);
// result type will be inferred from return statement so a number
console.log(result);
// explicitly declaring return type
const mulytiply = (a, b) => {
    return a * b;
};
console.log(mulytiply(10, 12));
const greetAgain = (uid) => {
    console.log(uid);
};
greetAgain("h123");
greetAgain(123);
let gree;
gree = (name, age) => {
    console.log(name, age);
};
gree("db", "23");
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return add(num1, num2);
    }
    else {
        return "operation not valid";
    }
};
console.log(calc(12, 23, "add"));
