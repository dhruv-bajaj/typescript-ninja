var myAge = 25;
console.log(myAge);
// age is of type any not number
myAge = "Twenty Five";
console.log(myAge);
// This basically reverts typescript to javascript
// Not much helpful. Rare use cases. Be careful when using it
var mixed_type_array = [];
mixed_type_array.push("mario");
mixed_type_array.push(false);
console.log(mixed_type_array);
var new_ninja;
new_ninja = { name: "db", age: 25 };
console.log(new_ninja);
