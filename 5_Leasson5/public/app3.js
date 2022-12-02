import { Inv } from './classes/Invoice.js';
const obj = new Inv('Sb', "owes", 123);
console.log(obj.format());
const me = {
    name: "sb",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
