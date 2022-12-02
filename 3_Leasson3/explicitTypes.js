//explicit types
//When we want to initialize a variabele without giving it a value so that it can infer
// its type and we can assign it value later
var sport;
sport = "cricket";
var numOfPlayers;
numOfPlayers = 12;
numOfPlayers = 11;
console.log(sport);
//arrays with explicit types
// declare type and initialize as well with empty array
var ninjaArray = [];
ninjaArray.push("db");
console.log(ninjaArray);
// Mixed array with uninon types
var mixed_array = [];
mixed_array.push("hello");
mixed_array.push(20);
console.log(mixed_array);
// we can also use union type on normal variables not just array variables
var uid;
uid = "1244";
console.log(uid);
uid = 123;
console.log(uid);
// objects
var ninjaOne;
ninjaOne = { name: 'db', age: 20 };
console.log(ninjaOne);
//array is also an object so
ninjaOne = ["sb", false];
console.log(ninjaOne);
//If we want to be specific about type of Object
var ninjaTwo;
// ninjaTwo =[] will give error
ninjaTwo = { name: 'mario', age: 20, beltColour: "black" };
console.log(ninjaTwo);
