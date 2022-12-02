import {Inv} from './classes/Invoice.js';
const obj = new Inv('Sb',"owes",123);
console.log(obj.format());

interface IsPerson{
    name:string,
    age:number,
    speak(a:string):void,
    spend(a:number):number,
}
const me: IsPerson={
    name:"sb",
    age:23,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spent',amount);
        return amount;
    }
}

console.log(me);