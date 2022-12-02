var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20;
// Gives error we can not change string to number
character = 'luigi';
// We can reassign it to a string only
console.log(character);
// We can explicitly define the type, but if not it is implicitly decided.
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ("hello"));
// I can pass anything in the above function even a string which doesn't make sense though.
// We get Nan(not a number) logged on the console
//So we can define the type
//It will give error if we send anything else
var circWithType = function (diameter) {
    return diameter * Math.PI;
};
console.log(circWithType(5.5));
//So typescript allows us to check type during compiation only.
//Error is thrown at compile time not at runtime.
//arrays
var names = ['luigi', 'mario', 'yoshi'];
// names.push(3) will give error. We can also push strings
// names[1]=5 similarly will give error
var mixed = ['ken', 4, 'chun-li', 7];
mixed.push(17);
// mixed[0]=true; will give error as original array contains number and string only.
//If declared in the beginning with different types we can change it to any of that type.
// mixed = [true] also gives error we cannot change the type of array
// mixed = [2,5] doesn't gives error
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// therse parameter also have a specific type like variables
ninja.name = 'ryu'; // is fine
// ninja.age = "28" :gives error
// ninja.skills =["fighting"] can not add a new property
// We have to update the entire object with same properties values can be different type should be same
ninja = {
    name: 'dhruv',
    belt: 'orange',
    age: 25
};
